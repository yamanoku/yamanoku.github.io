import dayjs from 'dayjs'
const date = new Date();

export const state = () => {
  return {
    currentYear: "",
    genarateTime: "",
    genarateDate: "",
  }
}

export const mutations = {
  GET_CURRENT_YEAR (state, year) {
    state.currentYear = year;
  },
  GET_GENARATE_TIME (state, time) {
    state.genarateTime = time;
  },
  SET_GENARATE_DATE (state, date) {
    state.genarateDate = date;
  }
}

export const actions = {
  async setDay (ctx) {
    ctx.commit("GET_CURRENT_YEAR", dayjs().year());
    ctx.commit("GET_GENARATE_TIME", date.toUTCString());
    ctx.commit("SET_GENARATE_DATE", dayjs(date.toUTCString()).format('YYYY-MM-DDTHH:mm:ss'));
  }
}
