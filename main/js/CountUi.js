var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

class CountForm extends React.Component {
  constructor() {
    super();
    this.state = {
      medicine : [],
      room: []
    };
  }

  componentDidMount() {
    client({ method: 'GET', path: '/api/pharmacyLetters' }).done(response => {
      this.setState({ medicine: response.entity._embedded.pharmacyLetters });
    });
    client({ method: 'GET', path: '/api/saveRooms' }).done(response => {
      this.setState({ room: response.entity._embedded.saveRooms });
    });
  }

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
        <div className='center'>{this.props.title}</div>
      </Ons.Toolbar>
    );
  }

  renderMedicine(row, index) {
    return (
      <Ons.ListItem
        tappable
        key={row._links.self.href}
        data={row}
      >
        <label className='center'>
          {row.pharmacyListName}
        </label>
      </Ons.ListItem>
    );
  }

  renderRoom(row, index) {
    return (
      <Ons.ListItem
        tappable
        key={row._links.self.href}
        data={row}
      >
        <label className='center'>
          {row.dateIn}&nbsp;&nbsp;&nbsp;{row.dateOut}
        </label>
      </Ons.ListItem>
    );
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <Ons.Card>
          <div className="content">
            <Ons.List
              dataSource={this.state.medicine}
              renderHeader={() => <Ons.ListHeader>Medicine</Ons.ListHeader>}
              renderRow={this.renderMedicine.bind(this)}
            />
            <Ons.List
              dataSource={this.state.room}
              renderHeader={() => <Ons.ListHeader>Room</Ons.ListHeader>}
              renderRow={this.renderRoom.bind(this)}
            />
          </div>
        </Ons.Card>
      </Ons.Page>
    );
  }
}

class CountPatient extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      search: '',
      patients: []
    };
  }

  handleSearch() {
    if (this.state.name === '') {
      ons.notification.alert('empty! bitch!');
    } else {
      client({
        method: 'GET', path: '/api/patientSaves/' + this.state.name
      }).done(response => {
        this.setState({ patients: [response.entity.firstName] });
      }, response => {
        ons.notification.alert(response.status.code + '! bitch!');
      });
    }
  }

  renderRow(row, index) {
    return (
      <Ons.ListItem
        key={row}
        data={row}
      >
        {row} &nbsp;&nbsp;&nbsp;
        <Ons.Button
          onClick={event => this.props.navigator.pushPage({ component: CountForm, props: { key: 'CountForm', title: row } }, { animation: 'fade-ios' })}
          icon='ion-happy-outline'
        />
      </Ons.ListItem>
    );
  }

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>{'Counter'}</div>
      </Ons.Toolbar>
    );
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <Ons.Card>
          <section style={{ textAlign: 'center' }}>
            <p>
              <Ons.SearchInput
                placeholder='Patient Name'
                value={this.state.name}
                onChange={event => this.setState({ name: event.target.value })}
              />
            </p>
            <p>
              <Ons.Button onClick={this.handleSearch.bind(this)}>Search</Ons.Button>
            </p>
          </section>
        </Ons.Card>
        <Ons.Card>

          <Ons.List
            dataSource={this.state.patients}
            renderHeader={() => <Ons.ListHeader>Patients</Ons.ListHeader>}
            renderRow={this.renderRow.bind(this)}
          />

        </Ons.Card>
      </Ons.Page>
    );
  }
}

export default class ServeApp extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.loadPage = this.loadPage.bind(this);
  }

  hide() {
    this.setState({ isOpen: false });
  }

  show() {
    this.setState({ isOpen: true });
  }

  loadPage(page) {
    this.hide();
    this.navigator.resetPage({ component: page, props: { key: page } }, { animation: 'fade-ios' });
  }

  renderPage(route, navigator) {
    route.props = route.props || {};
    route.props.navigator = navigator;
    route.props.showMenu = this.show.bind(this);
    return React.createElement(route.component, route.props);
  }

  render() {
    return (
      <Ons.Splitter>
        <Ons.SplitterContent>
          <Ons.Navigator initialRoute={{ component: CountPatient, props: { key: 'CountPatient' } }} renderPage={this.renderPage.bind(this)} ref={(navigator) => { this.navigator = navigator; }} />
        </Ons.SplitterContent>
      </Ons.Splitter>
    );
  }
}