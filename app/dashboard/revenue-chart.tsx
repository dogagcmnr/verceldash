import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue } from '../lib/data';

// ...

export default async function RevenueChart() { // Make component async here, remove the props
    const revenue = await fetchRevenue(); // Fetching data inside the compo.

    const chartHeight = 350;
    const { yAxisLabels, topLabel } = generateYAxis(revenue);

    if (!revenue || revenue.length === 0) {
        return <p className="mt-4 text-gray-400">Data yok.</p>
    }
}