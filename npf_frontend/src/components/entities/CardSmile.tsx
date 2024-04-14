import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"

import smileImgGreen from '../../assets/smile-green.png'
import smileImgOrange from '../../assets/smile-orange.png'
import smileImgRed from '../../assets/smile-red.png'

import { levelLoyalty, loyaltyDescription } from '../../constants'

export default function CardSmile({ prediction }: { prediction: number }) {

  return (
    <>
      <Card className="w-[300px] h-[350px] rounded-3xl">
        <CardHeader>
          <div className="flex justify-between">
            <div>Лояльность:</div>
            <div className={prediction < levelLoyalty.low_level ? `text-red-600` :
              prediction < levelLoyalty.mid_level ? `text-orange-600` : `text-green-600`}>{prediction}</div>
          </div>
        </CardHeader>
        <CardContent>
          <img src={prediction < levelLoyalty.low_level ? smileImgRed :
            prediction < levelLoyalty.mid_level ? smileImgOrange : smileImgGreen} className="mx-auto mt-5 mb-1" />
          <div className={`${prediction < levelLoyalty.low_level ? `text-red-600` :
            prediction < levelLoyalty.mid_level ? `text-orange-600` : `text-green-600`} text-center mb-5`}>
            {prediction < levelLoyalty.low_level ? 'Низкий' :
              prediction < levelLoyalty.mid_level ? 'Средний' : 'Высокий'} уровень <br></br>лояльности
          </div>
          <div className="text-center">
            {prediction < levelLoyalty.low_level ? loyaltyDescription.high :
              prediction < levelLoyalty.mid_level ? loyaltyDescription.mid : loyaltyDescription.low}
          </div>
        </CardContent>
      </Card>
    </>
  )
}
