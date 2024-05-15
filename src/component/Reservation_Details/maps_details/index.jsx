import React, { useState, useEffect, useCallback } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from '../../../function/header'
import { Container as MapDiv, NaverMap, Marker, useNavermaps, Overlay, useMap } from 'react-naver-maps'
import { GrHomeRounded } from "react-icons/gr";
import { PiNavigationArrow } from "react-icons/pi";
import { makeMarkerClustering } from './MakeMarkerClustering';
import { locationText } from '../../../constants/text/api/Reservation';
import { star } from '../../../function/star';
import { useReservationListQuery } from '../../../hooks/queries/api/Main';
import { FaMapMarkerAlt } from "react-icons/fa";

const index = () => {

  const navermaps = useNavermaps();

  const data = useLocation().state;

  const [zoom, setZoom] = useState(13);
  const [map, setMap] = useState();

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [draggable, setDraggable] = useState(true);
  const [disableKineticPan, setDisableKineticPan] = useState(true);
  const [tileTransition, setTileTransition] = useState(true);
  const [minZoom, setMinZoom] = useState(7);
  const [scaleControl, setScaleControl] = useState(true);

  const [error, setError] = useState(null);

  const { data: reservationList } = useReservationListQuery();

  const [select, setSelect] = useState(6);

  // 위치 아이콘 누르면 화면 센터로 이동

  // useEffect(() => {
  //   if (reservationList && select) {
  //     const selectedMarker = reservationList.find(x => x.reservationId === select);
  //     if (selectedMarker) {
  //       map.setCenter(new navermaps.LatLng(selectedMarker.xcoordinate, selectedMarker.ycoordinate));
  //     }
  //   }
  // }, [select]);

  const MarkerCluster = () => {

    const navermaps = useNavermaps();
    const map = useMap();

    const MarkerClustering = makeMarkerClustering(window.naver);

    const htmlMarker1 = {
      content:
        '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-1.png);background-size:contain;"></div>',
      size: navermaps.Size(80, 80),
      anchor: navermaps.Point(20, 20),
    }

    const data = reservationList;

    const markers = [];

    if (reservationList) {
      for (var i = 0, ii = data.length; i < ii; i++) {
        var spot = data[i],
          latlng = new naver.maps.LatLng(spot.xcoordinate, spot.ycoordinate),
          marker = new naver.maps.Marker({
            position: latlng,
            title: spot.title,
            draggable: false,
            icon: i + 1 == select ? {
              content: `
                  <div>
                    
                    <div style="display: flex; justify-content: center;">
                      <img src="/images/marker.png" style="width: 30px;" />
                    </div>

                    <div style="font-size: 12px; position: absolute; width: 200px; top: -100px; left: -85px; display: flex; margin-bottom: 10px; background-color: white; padding: 5px;">
                      <img src="https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${spot.reservationFiles[0]?.fileName}" style="width: 100px; height: 70px;" />
                      <div style="margin-left: 12px;">
                        <div>${spot.title}</div>
                        <div></div>
                      </div>
                    </div>

                  </div>
                `,

            } : {
              content: `
                  <div style="display: flex; justify-content: center;">
                    <img src="/images/marker.png" style="width: 30px;" />
                  </div>
                `
            },
          });
          
        markers.push(marker);
      }
    }

    markers.forEach((marker, index) => {
      naver.maps.Event.addListener(marker, 'click', () => {
        setSelect(reservationList.filter(x => x.title == marker.title)[0].reservationId);
      });
    });

    useEffect(() => {
      if (markers.length > 0) {
        const cluster = new MarkerClustering({
          minClusterSize: 2,
          maxZoom: 10,
          map: map,
          markers: markers,
          disableClickZoom: false,
          gridSize: 120,
          icons: [htmlMarker1],
          indexGenerator: [10, 100, 200, 500, 1000],
          stylingFunction: (clusterMarker, count) => {
            clusterMarker.getElement().querySelector('div:first-child').innerText = count;
          },
        });

        return () => {
          // Naver 지도 API에서 클러스터를 지도에서 제거하는 메서드
          cluster.setMap(null);
        };
      }
    }, [select]);
  }

  const handleClick = (g) => {
    const successHandler = (position) => {
      const { latitude, longitude } = position.coords;

      setLatitude(latitude);
      setLongitude(longitude);

      if (g) {
        map.setCenter(new navermaps.LatLng(data.xcoordinate, data.ycoordinate));
      } else map.setCenter(new navermaps.LatLng(latitude, longitude));
    };

    const errorHandler = (error) => {
      setError(error.message);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };


  const handleZoomChanged = useCallback((zoom) => {
    console.log(`zoom: ${zoom}`)
  }, [])

  const normalBtnStyle = {
    backgroundColor: '#fff',
    border: 'solid 1px #333',
    outline: '0 none',
    borderRadius: '5px',
    boxShadow: '2px 2px 1px 1px rgba(0, 0, 0, 0.5)',
    margin: '0 5px 5px 0',
  }

  const selectedBtnStyle = {
    ...normalBtnStyle,
    backgroundColor: '#2780E3',
    color: 'white',
  }

  return (
    <div className='bg-bg h-full'>
      <Header
        padding title={"지도"}
        noClose
      />
      <MapDiv className='w-full h-3/5 rounded-lg overflow-hidden relative'>
        <div className='absolute h-20 top-0 right-0 flex p-5'>
          <div className='shadow-custom mr-2 w-8 h-8 flex justify-center items-center bg-white rounded-full'
            onClick={() => handleClick("home")}>
            <GrHomeRounded />
          </div>
          <div className='shadow-custom w-8 h-8 flex justify-center items-center bg-white rounded-full'
            onClick={() => handleClick()}>
            <PiNavigationArrow className='text-lg' />
          </div>
        </div>
        <div>
          {/* <button
            style={draggable ? selectedBtnStyle : normalBtnStyle}
            onClick={() => {
              setDraggable((prev) => !prev)
            }}
          >
            지도 인터렉션
          </button>
          <button
            style={!disableKineticPan ? selectedBtnStyle : normalBtnStyle}
            onClick={() => {
              setDisableKineticPan((prev) => !prev)
            }}
          >
            관성 드래깅
          </button>
          <button
            style={tileTransition ? selectedBtnStyle : normalBtnStyle}
            onClick={() => {
              setTileTransition((prev) => !prev)
            }}
          >
            타일 fadeIn 효과
          </button>
          <button
            style={scaleControl ? selectedBtnStyle : normalBtnStyle}
            onClick={() => {
              setScaleControl((prev) => !prev)
            }}
          >
            모든 지도 컨트롤
          </button>
          <button
            style={normalBtnStyle}
            onClick={() => {
              setMinZoom((prev) => (prev === 10 ? 7 : 10))
            }}
          >
            최소/최대 줌 레벨: {minZoom} ~ 21
          </button> */}
        </div>
        <NaverMap
          // zoomControl
          //   zoomControlOptions={{
          //     position: navermaps.Position.top,
          //   }}

          ref={setMap}
          defaultCenter={new navermaps.LatLng(data.xcoordinate, data.ycoordinate)}
          defaultZoom={13}
          onZoomChanged={handleZoomChanged}
          // 지도 인터랙션 옵션
          draggable={draggable}
          pinchZoom={draggable}
          scrollWheel={draggable}
          keyboardShortcuts={draggable}
          disableDoubleTapZoom={!draggable}
          disableDoubleClickZoom={!draggable}
          disableTwoFingerTapZoom={!draggable}
          // 관성 드래깅 옵션
          disableKineticPan={disableKineticPan}
          // 타일 fadeIn 효과
          tileTransition={tileTransition}
          // min/max 줌 레벨
          minZoom={minZoom}
          maxZoom={21}
          // 지도 컨트롤
          scaleControl={scaleControl}
          logoControl={scaleControl}
          mapDataControl={scaleControl}

        // 일반, 위성
        //   mapTypeControl={scaleControl}
        //   zoomControl={scaleControl}
        >
          {/* <Marker position={new navermaps.LatLng(data.xcoordinate, data.ycoordinate)} /> */}
          <Marker
            position={new navermaps.LatLng(latitude, longitude)}
            icon={{
              content: `
                            <div style="display: flex; justify-content: center; align-items: center; width: 20px; height: 20px; background-color: white; border-radius: 50%; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);">
                                <div style="width: 13px; height: 13px; background-color: red; border-radius: 50%;"></div>
                            </div>
                            `,
              anchor: new window.naver.maps.Point(10, 10),
            }} />
          <MarkerCluster />
        </NaverMap>
      </MapDiv>
      <div className='p-5 bg-white absolute bottom-0 h-2/5 w-full overflow-y-scroll'>
        {reservationList && reservationList.map(x => {
          return (
            <div key={x.reservationId} className='border-y border-grey07 flex py-5'>
              <img className='w-32 h-28 rounded' src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${x.reservationFiles[0]?.fileName}`} />
              <div className='m-2 ml-4 text-xs flex flex-col'>
                <div className='flex mb-2 flex-wrap'>
                  <div className='mr-1 py-[2px] font-bold'>{x.title}</div>
                  {x.category1 && <div className='bg-ms text-white px-1 py-[2px] rounded mr-1'>{x.category1}</div>}
                  {x.category2 && <div className='bg-ms text-white px-1 py-[2px] rounded mr-1'>{x.category2}</div>}
                  {x.category3 && <div className='bg-ms text-white px-1 py-[2px] rounded mr-1'>{x.category3}</div>}
                </div>
                {/* <div>{data.subTitle}</div> */}
                <div className='flex'>{x.locationDetails}</div>
                <div className='flex mt-1'>{star(x.score)}</div>
                <div className='flex flex-1 items-end'>
                  <div>신청 {x.resrvationApplicants.length}</div>
                  <div className='text-grey04'>/{x.peopleCount}명</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default index