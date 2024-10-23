import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import {lineChartData} from "./FAKE_DATA.jsx";

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend);

export const LineGraph = () => {

    const options = {}
    const data = {}

    return <Line options={options} data={lineChartData} />;
};