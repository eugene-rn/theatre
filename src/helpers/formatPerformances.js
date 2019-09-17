import moment from "moment";

const formatPerformances = (performances, sessions) => {
  const existingDays = [];
  return performances.map(perf => {
    const sessionsArray = sessions
      .filter(session => perf.id === session.relationships.performance.data.id)
      .map(filteredSession => filteredSession.attributes);
      
    const days = [];
    for (let i = 0; i < sessionsArray.length; i++) {
      const formattedDay = moment(sessionsArray[i].from).format("YYYY-MM-DD")
      if (!existingDays.includes(formattedDay)) {
        const currentDay = formattedDay;
        existingDays.push(formattedDay);

        const times = sessionsArray
          .filter(
            session => moment(session.from).format("YYYY-MM-DD") === currentDay
          )
          .map(day => ({
            from: moment(day.from).format("HH:mm"),
            to: moment(day.to).format("HH:mm")
          }));

          days.push({
            day: currentDay,
            times
          })
      }
    }

    return { ...perf, sessions: days };
  });
};

export default formatPerformances;
