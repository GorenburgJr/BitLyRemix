import { useFetcher } from "@remix-run/react";
import { RectTabsProps } from "types"

export default function RectTabs (data: RectTabsProps) {
    const buttons = data.data;
    const fetcher = useFetcher()
    function changeChartMode (name: string) {
        console.log(true)
        return 
    }
    return <>
        <div className="rect-tabs">
            {buttons.map((button) => (
                <button
                key={button.name}
                disabled={button.disabled}
                onClick={() => changeChartMode(button.name)}
                >
                {button.name}
                </button>
            ))}
        </div>
    </>
} 

export function action ({ request }: {request: Request}) {

}