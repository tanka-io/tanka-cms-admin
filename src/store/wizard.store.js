export default {
    state: {
        chart: {
            excelPath: "",
            sheet: "",
            datas: [],
            config: {
                headers: 0,
                ends:0,
                fields: []
            },
            schema:{}
        }
    },
    getters: {
        getChartWizard(state) {
            return state.chart
        }
    },
    mutations: {
        setChartWizard(state, chart) {
            state.chart = chart;
        }
    },
    actions: {
        setChartWizard(context, chart) {
            context.commit("setChartWizard", chart);
        }
    }
}