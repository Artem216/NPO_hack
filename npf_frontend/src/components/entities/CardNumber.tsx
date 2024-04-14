import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"

import smileImg from '../../assets/smile-green.png'

export default function CardNumber({ number, title }: { number: string, title: string }) {
    return (
        <>
            <Card className="w-[400px] h-[250px] rounded-3xl">
                <CardHeader className="p-4">
                    <div className="text-lg text-center">{title}</div>
                </CardHeader>
                <CardContent>
                    <div className="text-main-dark text-[100px] text-center">{number}</div>
                </CardContent>
            </Card>
        </>
    )
}
