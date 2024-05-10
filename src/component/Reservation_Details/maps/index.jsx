import React, { useState, useCallback } from 'react'
import { Container } from './styles'
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps'

const index = ({ data }) => {
    console.log("maps data: ", data);

    const navermaps = useNavermaps();

    const [zoom, setZoom] = useState(13);

    const [draggable, setDraggable] = useState(true);
    const [disableKineticPan, setDisableKineticPan] = useState(true);
    const [tileTransition, setTileTransition] = useState(true);
    const [minZoom, setMinZoom] = useState(7);
    const [scaleControl, setScaleControl] = useState(true);

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
        <Container>
            <div>위치</div>
            <div className='mt-[16px]'>
                <MapDiv className='w-full h-[200px] rounded-lg overflow-hidden' onClick={()=>console.log(123)}>
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
                        <Marker position={new navermaps.LatLng(37.608330446787, 126.73055919937)} />
                        <Marker position={new navermaps.LatLng(37.612356452, 126.73255969)} />
                    </NaverMap>
                </MapDiv>
            </div>
        </Container>
    )
}

export default index