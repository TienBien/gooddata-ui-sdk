// (C) 2023 GoodData Corporation
import { IChartConfig } from "../../../interfaces";
import { IChartOptions } from "../../typings/unsafe";
import { HighchartsOptions } from "../../lib";
import { isAreaChart, isComboChart } from "../_util/common";
import { SeriesAreaOptions } from "highcharts";

const removeStacking = (series: SeriesAreaOptions[]) =>
    series.map((seriesItem: SeriesAreaOptions) =>
        seriesItem.type && !isAreaChart(seriesItem.type)
            ? seriesItem
            : {
                  ...seriesItem,
                  stack: null,
                  stacking: null,
              },
    );

export function getContinuousLineConfiguration(
    chartOptions: IChartOptions,
    config: HighchartsOptions,
    chartConfig?: IChartConfig,
) {
    const isContinuousLineEnabled = chartConfig?.continuousLine?.enabled ?? false;
    if (!isContinuousLineEnabled || chartConfig?.stackMeasures) {
        return {};
    }
    const { type } = chartOptions;
    const series = config?.series as SeriesAreaOptions[];
    // remove the stack configuration for the Combo|Area chart
    const sanitizedSeries = isComboChart(type) || isAreaChart(type) ? removeStacking(series) : series;

    return {
        plotOptions: {
            series: {
                connectNulls: isContinuousLineEnabled,
            },
        },
        series: sanitizedSeries,
    };
}
