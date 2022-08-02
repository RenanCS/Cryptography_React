import { useEffect, useState } from 'react';
import { IWatherForecastDto } from './model/temperatureDto';
import { getBadRequest } from './service/getBadRequest';
import { postTemperature } from './service/postTemperature';

function App() {

  const [infoDescrypt, setInfoDescrypt] = useState<string>("");
  useEffect(() => {
    const fetch = async () => {
      const value = await getBadRequest();
      setInfoDescrypt(value);
    };

    fetch();
  }, []);


  const handleSendInfo = async () => {
    const info: IWatherForecastDto = { temperatureC: 99 };
    const value = await postTemperature(info);
    setInfoDescrypt(value);
  }

  return (
    <div>
      <label>{infoDescrypt}</label>
      <br />
      <button onClick={handleSendInfo}>Enviar dados</button>
    </div>
  );
}

export default App;
