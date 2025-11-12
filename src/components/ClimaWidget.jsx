// /src/components/ClimaWidget.jsx
import { useEffect, useState } from "react";

// importa todas as imagens da pasta
const icons = import.meta.glob("../assets/img/*.png", { eager: true });

// cria um objeto mapeado pelo nome do arquivo sem extensão
const iconsMap = Object.fromEntries(
  Object.entries(icons).map(([path, module]) => {
    const fileName = path.split("/").pop().replace(".png", "");
    return [fileName, module.default];
  })
);

export default function ClimaWidget() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const api = {
      key: "64ed82577ced7f69cb1687f0ce536131",
      base: "https://api.openweathermap.org/data/2.5/",
      lang: "pt_br",
      units: "metric",
    };

    const fetchWeather = async (lat, lon, cityFallback = null) => {
      try {
        let url;
        if (cityFallback) {
          url = `${api.base}weather?q=${cityFallback}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`;
        } else {
          url = `${api.base}weather?lat=${lat}&lon=${lon}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`;
        }

        const res = await fetch(url);
        if (!res.ok) throw new Error("Erro ao buscar clima");
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError(err?.message || "Falha ao carregar clima");
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
        () => fetchWeather(null, null, "São Paulo") // ✅ fallback para SP
      );
    } else {
      fetchWeather(null, null, "São Paulo"); // ✅ fallback se geolocalização não for suportada
    }
  }, []);

  const dateBuilder = (d) => {
    const days = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ];
    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  };

  if (error) return <h4>Erro: {error}</h4>;
  if (!weather) return <h4>Carregando clima...</h4>;

  const iconCode = weather?.weather?.[0]?.icon;
  const iconSrc = iconCode ? iconsMap[iconCode] : null;

  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap">
      <div className="box-img me-3">
        {iconSrc ? (
          <img src={iconSrc} alt={iconCode} />
        ) : (
          <div style={{ width: 80, height: 80 }} aria-label="Ícone indisponível" />
        )}
      </div>
      <div className="box-text">
        <h4 className="city">
          {weather.name}, {weather.sys.country}
        </h4>
        <h4 className="date">{dateBuilder(new Date())}</h4>
        <h4 className="container-temp">{Math.round(weather.main.temp)}°C</h4>
        <h4 className="low-high">
          {Math.round(weather.main.temp_min)}°C / {Math.round(weather.main.temp_max)}°C
        </h4>
        <h4 className="weather">{weather.weather[0].description}</h4>
        <p>Fonte: OpenWeatherMap</p>
      </div>
    </div>
  );
}