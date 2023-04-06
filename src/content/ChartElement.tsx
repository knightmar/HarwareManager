import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineController,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import {Line} from "react-chartjs-2";

import {useState} from "react";

type Data = {
    labels: string[];
    datasets: [{ label: string, data: number[] }];
};

export default function ChartElement() {

    const [data, setData] = useState<Data>(
        {
            labels: [],
            datasets: [{
                label: '',
                data: [],
            }],
        }
    );

    function updateData() {
        let labels: string[] = [];
        let data: number[] = [];
        for (let i = 0; i < 10; i++) {
            labels.push(i.toString());
            data.push(Math.random() * 100);
        }
        setData({
            labels: labels,
            datasets: [{
                label: '',
                data: data,
            }],
        });
    }

    ChartJS.register(
        LineController,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Filler,
    )

    const options = {
        plugins: {
            legend: {
                display: false
            }
        },
        elements: {
            line: {
                tension: 0,
                borderWidth: 2,
                borderColor: '#2b55a2',
                fill: "start",
                backgroundColor: '#2b8ca2',
            },
            point: {
                radius: 0,
                hitRadius: 0,
            },
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            }
        }
    };

    console.log(data)
    return (
        <div className={"flex"}>
            <div className={"border-2 border-black w-1/2"}>
                <Line data={data} width={500} height={200} options={options}></Line>
            </div>
            <button className={"h-7 self-center ml-3 p-1 text-red-400 btn border-red-400 border-2 hover:bg-red-400 hover:text-white transition duration-300 ease-in-out text-xs rounded"} onClick={updateData}>Click me</button>
        </div>
    )
}
