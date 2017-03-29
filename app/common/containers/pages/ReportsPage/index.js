import React from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import withStyles from 'withStyles';

import { H1 } from 'components/Title';
import Chart from 'components/Chart';

import { fetchReportsDeclations } from 'redux/reports';
import { getReports } from 'reducers';

import styles from './styles.scss';

const options = {
  start_date: '2017-03-20T13:45:11.447000Z',
  end_date: (new Date()).toJSON(),
  doctor_id: 'be802077-ddf0-4980-a390-6bfb513381ae',
  msp_id: '320e54d5-1f8f-4021-8449-c4378735d974',
};

@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchReportsDeclations(options)),
})
@connect(state => ({
  reports: getReports(state),
}))
@withStyles(styles)
export default class ReportsPage extends React.Component {
  render() {
    const { reports } = this.props;
    console.log(reports);
    return (
      <section>
        <H1>Динаміка потрфелю</H1>
        <div className={styles.options}>
          <Chart data={reports} />
        </div>
      </section>
    );
  }
}
