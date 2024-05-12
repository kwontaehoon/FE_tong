import React, { useState, useEffect, useCallback } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from '../../../function/header'
import { Container as MapDiv, NaverMap, Marker, useNavermaps, Overlay, useMap } from 'react-naver-maps'
import { Title, Jangi, Introduction } from './styles'
import { GrHomeRounded } from "react-icons/gr";
import { PiNavigationArrow } from "react-icons/pi";
import { makeMarkerClustering } from './MakeMarkerClustering';
import { locationText } from '../../../constants/text/api/Reservation';

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

    function MarkerCluster() {
    
      const navermaps = useNavermaps()
      const map = useMap()
    
      const MarkerClustering = makeMarkerClustering(window.naver);
    
      const htmlMarker1 = {
        content:
          '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-1.png);background-size:contain;"></div>',
        size: navermaps.Size(40, 40),
        anchor: navermaps.Point(20, 20),
      }
      const htmlMarker2 = {
        content:
          '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-2.png);background-size:contain;"></div>',
        size: navermaps.Size(40, 40),
        anchor: navermaps.Point(20, 20),
      }
      const htmlMarker3 = {
        content:
          '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-3.png);background-size:contain;"></div>',
        size: navermaps.Size(40, 40),
        anchor: navermaps.Point(20, 20),
      }
      const htmlMarker4 = {
        content:
          '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-4.png);background-size:contain;"></div>',
        size: navermaps.Size(40, 40),
        anchor: navermaps.Point(20, 20),
      }
      const htmlMarker5 = {
        content:
          '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-5.png);background-size:contain;"></div>',
        size: navermaps.Size(40, 40),
        anchor: navermaps.Point(20, 20),
      }
    
      const data = locationText;
    
      const [cluster] = useState(() => {
        const markers = []
    
        for (var i = 0, ii = data.length; i < ii; i++) {
          var spot = data[i],
            latlng = new naver.maps.LatLng(spot.grd_la, spot.grd_lo),
            marker = new naver.maps.Marker({
              position: latlng,
              draggable: true,
            })
    
          markers.push(marker)
        }
    
        const cluster = new MarkerClustering({
          minClusterSize: 2,
          maxZoom: 8,
          map: map,
          markers: markers,
          disableClickZoom: false,
          gridSize: 120,
          icons: [
            htmlMarker1,
            htmlMarker2,
            htmlMarker3,
            htmlMarker4,
            htmlMarker5,
          ],
          indexGenerator: [10, 100, 200, 500, 1000],
          stylingFunction: function (clusterMarker, count) {
            // without jquery $(clusterMarker.getElement()).find('div:first-child').text(count)
            clusterMarker
              .getElement()
              .querySelector('div:first-child').innerText = count
          },
        })
    
        return cluster
      })
    
      return <Overlay element={cluster} />
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
        <div className='bg-bg'>
            <Header
                padding title={"지도"}
                noClose
            />
            <MapDiv className='w-full h-screen rounded-lg overflow-hidden relative'>
                <div className='absolute h-20 top-0 right-0 flex p-5'>
                    <div className='shadow-custom mr-3 w-11 h-11 flex justify-center items-center bg-white rounded-full'
                        onClick={() => handleClick("home")}>
                        <GrHomeRounded className='text-xl' />
                    </div>
                    <div className='shadow-custom w-11 h-11 flex justify-center items-center bg-white rounded-full'
                        onClick={() => handleClick()}>
                        <PiNavigationArrow className='text-2xl' />
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
                    <Marker position={new navermaps.LatLng(data.xcoordinate, data.ycoordinate)} />
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
            <div className='p-5 bg-white absolute bottom-0 w-full'>
                <Title>{data.title}</Title>
                <Jangi>{data.subTitle}</Jangi>
                <Introduction>{data.locationDetails}</Introduction>
            </div>
        </div>
    )
}

export default index