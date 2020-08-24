var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');


class ServeMeal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dish: [],
            drink: [],
            dessert: [],
            selectedDish: '',
            selectedDrink: '',
            selectedDessert: ''
        };
    }

    componentDidMount() {
        client({ method: 'GET', path: '/api/serveDishes' }).done(response => {
            this.setState({ dish: response.entity._embedded.serveDishes });
        });
        client({ method: 'GET', path: '/api/serveDrinks' }).done(response => {
            this.setState({ drink: response.entity._embedded.serveDrinks });
        });
        client({ method: 'GET', path: '/api/serveDesserts' }).done(response => {
            this.setState({ dessert: response.entity._embedded.serveDesserts });
        });
    }

    showMenu() {
        this.props.showMenu();
    }

    handleSelectedDish(select) {
        this.setState({ selectedDish: select });
    }

    handleSelectedDrink(select) {
        this.setState({ selectedDrink: select });
    }

    handleSelectedDessert(select) {
        this.setState({ selectedDessert: select });
    }

    handleClick() {
        var dishId = this.state.selectedDish._links.self.href.split('/').pop()
        var drinkId = this.state.selectedDrink._links.self.href.split('/').pop()
        var dessertId = this.state.selectedDessert._links.self.href.split('/').pop()
        var patientId = this.props.cardTitle._links.self.href.split('/').pop()
        ons.notification.confirm({
            messageHTML:
                '<p>' + this.state.selectedDish.name + '</p>' +
                '<p>' + this.state.selectedDrink.name + '</p>' +
                '<p>' + this.state.selectedDessert.name + '</p>',
            callback: function (answer) {
                if (answer) {
                    client({ method: 'GET', path: '/dish_id/' + dishId + '/drink_id/' + drinkId + '/dessert_id/' + dessertId + '/patient_id/' + patientId })
                }
            }
        });
    }

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
                <div className='center'>
                    {this.props.cardTitle.firstName} &nbsp;&nbsp;&nbsp;
                    {this.props.cardTitle.patientLastName} &nbsp;&nbsp;&nbsp;
                    {this.props.cardTitle.allergy}
                </div>
            </Ons.Toolbar>
        );
    }

    renderSelectedDish(row) {
        return (
            <Ons.ListItem
                tappable
                key={row._links.self.href}
                data={row}
            >
                <label className='left'>
                    <Ons.Radio
                        inputId={`checkbox-${row.name}`}
                        checked={row === this.state.selectedDish}
                        onChange={this.handleSelectedDish.bind(this, row)}
                    />
                </label>
                <label htmlFor={`checkbox-${row.name}`} className='center'>
                    {row.name}
                </label>
            </Ons.ListItem>
        );
    }

    renderSelectedDrink(row) {
        return (
            <Ons.ListItem
                tappable
                key={row._links.self.href}
                data={row}
            >
                <label className='left'>
                    <Ons.Radio
                        inputId={`checkbox-${row.name}`}
                        checked={row === this.state.selectedDrink}
                        onChange={this.handleSelectedDrink.bind(this, row)}
                    />
                </label>
                <label htmlFor={`checkbox-${row.name}`} className='center'>
                    {row.name}
                </label>
            </Ons.ListItem>
        );
    }

    renderSelectedDessert(row) {
        return (
            <Ons.ListItem
                tappable
                key={row._links.self.href}
                data={row}
            >
                <label className='left'>
                    <Ons.Radio
                        inputId={`checkbox-${row.name}`}
                        checked={row === this.state.selectedDessert}
                        onChange={this.handleSelectedDessert.bind(this, row)}
                    />
                </label>
                <label htmlFor={`checkbox-${row.name}`} className='center'>
                    {row.name}
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
                            dataSource={this.state.dish}
                            renderHeader={() => <Ons.ListHeader>Dishs</Ons.ListHeader>}
                            renderRow={this.renderSelectedDish.bind(this)}
                        />
                        <Ons.List
                            dataSource={this.state.drink}
                            renderHeader={() => <Ons.ListHeader>Drinks</Ons.ListHeader>}
                            renderRow={this.renderSelectedDrink.bind(this)}
                        />
                        <Ons.List
                            dataSource={this.state.dessert}
                            renderHeader={() => <Ons.ListHeader>Dessert</Ons.ListHeader>}
                            renderRow={this.renderSelectedDessert.bind(this)}
                        />
                    </div>
                    <section style={{ textAlign: 'center' }}>
                        <p>
                            <Ons.Button onClick={this.handleClick.bind(this)}>OK</Ons.Button>
                        </p>
                    </section>
                </Ons.Card>
            </Ons.Page>
        );
    }
}

class ServePatient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patient: [],

        };
    }

    componentDidMount() {
        client({ method: 'GET', path: '/api/patientSaves' }).done(response => {
            this.setState({ patient: response.entity._embedded.patientSaves });
        });
    }

    handleSelectedDish(select) {
        this.setState({ selectedDish: select });
    }

    showMenu() {
        this.props.showMenu();
    }

    pushPage(id, event) {
        this.props.navigator.pushPage({ component: ServeMeal, props: { key: 'serveMeal', cardTitle: id } });
    }

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='center'>{ 'Nutritionist' }</div>
            </Ons.Toolbar>
        );
    }

    renderRow(row, index) {
        return (
            <Ons.ListItem
                key={row._links.self.href}
                data={row}
                onClick={this.pushPage.bind(this, row)}
            >
                {row.firstName} &nbsp;&nbsp;&nbsp;
                {row.patientLastName} &nbsp;&nbsp;&nbsp;
                {row.allergy} &nbsp;&nbsp;&nbsp;
            </Ons.ListItem>
        );
    }

    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                <Ons.Card>
                    <Ons.List
                        dataSource={this.state.patient}
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
        this.navigator.resetPage({ component: page, props: { key: page } }, { animation: 'fade' });
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
                    <Ons.Navigator initialRoute={{ component: ServePatient, props: { key: 'servePatient' } }} renderPage={this.renderPage.bind(this)} ref={(navigator) => { this.navigator = navigator; }} />
                </Ons.SplitterContent>
            </Ons.Splitter>
        );
    }
}