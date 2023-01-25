import { useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import styled from "styled-components";

const style = {
  width: "100%",
  height: "300px",
};

const YmapsAPI: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <YMapsContainer>
      <YMaps>
        <Map
          onLoad={() => setLoading(false)}
          style={style}
          defaultState={{ center: [55.443103, 37.776125], zoom: 15 }}
        >
          <Placemark geometry={[55.443103, 37.776125]} />
        </Map>
      </YMaps>
      {loading && (
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Загружаю карту...
        </div>
      )}
    </YMapsContainer>
  );
};

const YMapsContainer = styled.div`
  height: 30rem;
  width: 100%;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
`;
export default YmapsAPI;
