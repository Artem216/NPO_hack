import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const WelcomeBlock = () => {
	const navigate = useNavigate();

	return (
		<div className="max-w-[1000px] w-[90%] text-center mx-auto md:w-[80%] lg:w-[60%] xl:w-[50%]">
			<div className="text-3xl md:text-4xl lg:text-6xl mb-3 font-normal">
				Сервис прогнозирования <br></br> лояльности клиентов
			</div>
			<div className="mb-7">Технологии ИИ для улучшения бизнеса</div>
			<Button onClick={() => { navigate(`clients-data`) }}>Получить прогноз</Button>
		</div>
	);
};

export default WelcomeBlock;
