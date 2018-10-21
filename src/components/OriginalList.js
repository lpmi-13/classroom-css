// Vendor
import React, { Component } from 'react';
import { connect } from 'react-redux';
import key from 'weak-key';
import PropTypes from 'prop-types';

// Application
import { FETCH_ORIGINAL_LIST } from '../constants';

import TableRow from './TableRow';
import OriginalAlgoCode from './OriginalAlgoCode';

class ConnectedOriginalList extends Component {

  componentDidMount() {
    if (!this.props.alreadyFetched) {
      this.props.onFetchOriginalList();
    }
  } 

  render() {

    const { fetching, users } = this.props;

    return (
      <div>
        <div>
          <OriginalAlgoCode />
          <table>
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">User</th>
                <th scope="col">Contributions</th>
              </tr>
            </thead>
            <tbody>
              { fetching ? <div>Loading...</div> : users.map((user, i) => ( <TableRow
                key={key(user.login)}
                rowNumber={i + 1}
                userName={user.login}
                contributions={user.contribs}
         />)) }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOriginalList: () => dispatch({ type: FETCH_ORIGINAL_LIST })
  };
};

const mapStateToProps = state => {
  return { 
    users: state.originalUsers,
    fetching: state.originalFetching,
    error: state.originalError,
    alreadyFetched: state.originalAlreadyFetched
  };
};

ConnectedOriginalList.propTypes = {
  alreadyFetched: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  onFetchOriginalList: PropTypes.func.isRequired,
  users: PropTypes.object,
}

const OriginalList = connect(mapStateToProps, mapDispatchToProps)(ConnectedOriginalList);

export default OriginalList;