import ServeApp from './ServeUi';
import CountApp from './CountUi';


var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');


var datetime = new Date().toLocaleString();
var JSONDATA = {};
var firstName;
var patientLastName;
var patientPersonId;
var patientAge;
var patientHight;
var patientWeight;
var patientBloodtype;
var patientAddress;
var patientCareer;
var patientStatus;
var patientPhone;
var patientSymptom;
var allergy;

const userData = this;
var data;
var fullname;

// phakphum 1123
var nfemp;
var nlemp;
var lid;
var le;
var pid;
var did;
var d_patient;
var urin;
var spinal_cord;
var infection;
var microbiological_culture;
var x_sray;
var ultraSound;
var mri;
var biopsy;
var autopsy;
/*var type_room;*/

var tewich;

//===========================================================================================================================

var App  = React.createClass({
    getInitialState: function() {
        return {
            userId: '',
            userPassword: '',
            isOpen: false

        };
    },




    handleClick() {
        fetch('http://localhost:8080/api/userLogins/search/findByUserIdAndUserPassword?'+
            'UserId=' + this.state.userId + '&UserPassword=' + this.state.userPassword)

            .then((response)=> response.json())
            .then((responseJson) => {
                ons.notification.alert('เข้าสู่ระบบสำเร็จ' );
                data = responseJson;
                fullname = data.userId;

                //phakphum
                nfemp = data.userFirstName;
                nlemp = data.userLastName;
                tewich = this.state.userId;
                le = data._links.self.href.length-1;
                lid = data._links.self.href.charAt(le);

                console.log('data =>' + data);
                ReactDOM.render(<Menu />, document.getElementById('react'));

            })
            .catch((error) => {
                ons.notification.alert('โปรดตรวจสอบไอดีและรหัสผ่านอีกครั้ง');
                // console.error();
                console.log('data not found !!!')
            });
    },

    handleClick2() {
        ReactDOM.render(<CreateEmployee />, document.getElementById('react'));
    },

    handleUserId(e) {
        this.setState({userId: e.target.value});
    },

    handlePassword(e) {
        this.setState({userPassword: e.target.value});
    },

    handleNidChange(e) {
        this.setState({nid: e.target.value});
    },

    handleVegetableChange(vegetable) {
        this.setState({selectedVegetable: vegetable});
    },
    render: function() {
        return (

            <Ons.Page renderToolbar={this.renderToolbar}>


                <section style={{textAlign: 'center'}}>
                    <h1>เข้าสู่ระบบ</h1>

                    <img src={"http://www.publicdomainpictures.net/pictures/230000/velka/red-first-aid-cross.jpg"} alt="Onsen UI" style={{ width: '15%' }} />
                    <p>
                        <Ons.Input
                            value={this.state.userId}
                            onChange={this.handleUserId}
                            modifier='underbar'
                            float
                            placeholder='ไอดี' />
                    </p>
                    <p>
                        <Ons.Input
                            value={this.state.userPassword}
                            onChange={this.handlePassword}
                            modifier='underbar'
                            type='password'
                            float
                            placeholder='รหัสผ่าน' />
                    </p>
                    <p>
                        <Ons.Button onClick={this.handleClick}>เข้าสู่ระบบ</Ons.Button>
                    </p>
                </section>
            </Ons.Page>

        );
    }
});
//==========================================================================================================================

var Menu = React.createClass({
    getInitialState: function() {
        return {
            aid: '',
            isOpen: false

        };
    },

    handleBlack: function() {
        ReactDOM.render(<App />, document.getElementById('react'));
    },

    renderToolbar: function(){
        return (
            <Ons.Toolbar>
                <div className='center'>ระบบคนไข้ใน</div>



            </Ons.Toolbar>

        );

    },



    handleClick2: function() {
        ReactDOM.render(<Search />, document.getElementById('react'));
    },
    handleClick3: function() {
        ReactDOM.render(<CreatePatientHistory />, document.getElementById('react'));
    },

    handleClick4: function() {
        ReactDOM.render(<AppA />, document.getElementById('react'));
    },

    handleClick5: function(){
        ReactDOM.render(<ManageDiagnose />, document.getElementById('react'));
    },
    handleClick7: function(){
        ReactDOM.render(<AppAe />, document.getElementById('react'));
    },

    handleClick8: function(){
    ReactDOM.render(<AppTwo />, document.getElementById('react'));
    },

    handleServeApp: function(){
        ReactDOM.render(<ServeApp />, document.getElementById('react'));
    },

    handleCountApp: function(){
        ReactDOM.render(<CountApp />, document.getElementById('react'));
    },

    handleClickSearchFollowP: function(){
        ReactDOM.render(<SearchFollowP />, document.getElementById('react'));
    },

    handleUsernameChange(e) {
        this.setState({aid: e.target.value});
    },

    handlePasswordChange(e) {
        this.setState({nursePassword: e.target.value});
    },

    handleVegetableChange(vegetable) {
        this.setState({selectedVegetable: vegetable});
    },

    render: function() {
        return (

            <Ons.Page renderToolbar={this.renderToolbar}>
                <section style={{textAlign: 'center'}}>
                    <p>


                    </p>
                    <section style={{margin: '16px'}}>
                        <h1>เ ม นู</h1>
                        <Ons.ListTitle>&nbsp;<h5>เลือกรายการ</h5></Ons.ListTitle>
                        <h2>
                            <Ons.List>
                                <Ons.ListItem tappable onClick = {this.handleClick3.bind(this)}>
                                    <ons-icon icon="ion-android-clipboard"></ons-icon>
                                    &nbsp;&nbsp;ลงทะเบียนผู้ป่วย
                                </Ons.ListItem>
                                <Ons.ListItem tappable onClick = {this.handleClick4.bind(this)}>
                                    <ons-icon icon="ion-ios-contact"></ons-icon>
                                    &nbsp;&nbsp;จัดการห้องผู้ป่วย
                                </Ons.ListItem>
                                <Ons.ListItem tappable onClick = {this.handleClick5.bind(this)}>
                                    <ons-icon icon="ion-ios-pulse-strong"></ons-icon>
                                    &nbsp;&nbsp;วินิจฉัย
                                </Ons.ListItem>
                                <Ons.ListItem tappable onClick = {this.handleClick8.bind(this)}>
                                    <ons-icon icon="ion-android-contacts"></ons-icon>
                                    &nbsp;&nbsp;จัดเวรพยาบาล
                                </Ons.ListItem>
                                <Ons.ListItem tappable onClick = {this.handleClick7.bind(this)}>
                                    <ons-icon icon="ion-clock"></ons-icon>
                                    &nbsp;&nbsp;นัดหมายผู้ป่วยใน
                                </Ons.ListItem>
                                <Ons.ListItem tappable onClick = {this.handleServeApp.bind(this)}>
                                    <ons-icon icon="ion-pizza"></ons-icon>
                                    &nbsp;&nbsp;โภชนาการ
                                </Ons.ListItem>
                                <Ons.ListItem tappable onClick = {this.handleCountApp.bind(this)}>
                                    <ons-icon icon="fa-bitcoin"></ons-icon>
                                    &nbsp;&nbsp;คิดค่ารักษาพยาบาล
                                </Ons.ListItem>

                                <Ons.ListItem tappable onClick = {this.handleClickSearchFollowP.bind(this)}>
                                    <ons-icon icon="ion-ios-people"></ons-icon>
                                    &nbsp;&nbsp;ระบบติดตามอาการผู้ป่วย
                                </Ons.ListItem>
                            </Ons.List>
                        </h2>

                        <br/><br/>
                        <div style={{ textAlign: 'center' }}>
                            <Ons.Button onClick={this.handleBlack.bind(this)}><h3>ออกจากระบบ</h3></Ons.Button>
                        </div>
                        <br /><br /><br /><br />
                    </section>




                </section>
            </Ons.Page>



        );
    }
});
//========================================================================================================================================================================

var CreatePatientHistory = React.createClass({
    getInitialState: function() {
        return {

            firstName: '',
            patientLastName: '',
            patientAge: '',
            patientHight: '',
            patientSymptom:'',
            patientAddress: '',
            patientBloodtype: '',
            patientWeight : '',
            patientCareer : '',
            patientPersonId:'',
            patientStatus: '',
            patientPhone: '',
            allergy:'',
            id:'',
            userId:''
        };
    },
    handleBlack: function(){
        ReactDOM.render(<Menu />, document.getElementById('react'));
    },

    renderToolbar: function() {
        return (
            <Ons.Toolbar>
                <div className='center'>ลงทะเบียนผู้ป่วย</div>
                <div className='left'><Ons.BackButton onClick={this.handleBlack}>ถอยกลับ</Ons.BackButton></div>


            </Ons.Toolbar>
        );
    },


    handleClick: function() {

        firstName = this.state.firstName;
        patientLastName = this.state.patientLastName;
        patientPersonId = this.state.patientPersonId;
        patientAge = this.state.patientAge;
        patientHight = this.state.patientHight;
        patientWeight = this.state.patientWeight;
        patientBloodtype = this.state.patientBloodtype;
        patientAddress = this.state.patientAddress ;
        patientCareer = this.state.patientCareer;
        patientStatus = this.state.patientStatus;
        patientPhone = this.state.patientPhone;
        patientSymptom = this.state.patientSymptom;
        allergy = this.state.allergy;


        client({method: 'GET', path:"/firstName/"+this.state.firstName+"/patientLastName/"+this.state.patientLastName+"/patientPersonId/"+this.state.patientPersonId+"/patientAge/"+this.state.patientAge+"/patientHight/"+this.state.patientHight
        +"/patientWeight/"+this.state.patientWeight+"/patientBloodtype/"+this.state.patientBloodtype+"/patientAddress/"+this.state.patientAddress+"/patientCareer/"+this.state.patientCareer+"/patientStatus/"+this.state.patientStatus+"/patientPhone/"+this.state.patientPhone
        +"/patientSymptom/"+this.state.patientSymptom+"/allergy/"+this.state.allergy+"/userLogin/"+tewich}).done(ons.notification.alert("บันทึกสำเร็จ"));


        ReactDOM.render(<Showinfo1 />, document.getElementById('react'));


    },

    handleuserId1(e) {
        this.setState({id: e.target.value});
    },
    handleId(e) {
        this.setState({patientId: e.target.value});
    },

    handleFirstName(e) {
        this.setState({firstName: e.target.value});
    },

    handleLastName(e) {
        this.setState({patientLastName: e.target.value});
    },

    handlePersonId(e) {
        this.setState({patientPersonId: e.target.value});
    },

    handleAge(e) {
        this.setState({patientAge: e.target.value});
    },

    handleHight(e) {
        this.setState({patientHight: e.target.value});
    },

    handleWeight(e) {
        this.setState({patientWeight: e.target.value});
    },

    handleBloodtype(e) {
        this.setState({patientBloodtype: e.target.value});
    },

    handleAddress(e) {
        this.setState({patientAddress: e.target.value});
    },

    handleCareer(e) {
        this.setState({patientCareer: e.target.value});
    },

    handleStatus(e) {
        this.setState({patientStatus: e.target.value});
    },

    handlePhone(e) {
        this.setState({patientPhone: e.target.value});
    },

    handleSymptom(e) {
        this.setState({patientSymptom: e.target.value});
    },
    handleAllergy(e) {
        this.setState({allergy: e.target.value});
    },
    handleuserId(e) {
        this.setState({userId: e.target.value});
    },


    hide() {
        this.setState({isOpen: false});
    },

    show() {
        this.setState({isOpen: true});
    },


    render: function() {
        return (
            <Ons.Splitter>

                <Ons.SplitterContent>
                    <Ons.Page renderToolbar={this.renderToolbar}>
                        <section style={{textAlign: 'center'}}>

                            <section style={{fontSize:'15px',margin:'5px',textAlign:'center'}}>
                                <center><table>
                                    <tr><td>ไอดีผู้บันทึก</td><td style={{color:'blue'}}><Ons.Input
                                        value={data.userId}
                                        onChange={this.handleuserId}
                                    /></td></tr>
                                    <tr><td>ชื่อ</td><td style={{color:'blue'}}><Ons.Input
                                        value={this.state.firstName}
                                        onChange={this.handleFirstName}
                                    /></td></tr>
                                    <tr><td>นาสกุล</td><td style={{color:'blue'}}><Ons.Input
                                        value={this.state.patientLastName}
                                        onChange={this.handleLastName}
                                    /></td></tr>
                                    <tr><td>รหัสบัตรประชาชน</td><td style={{color:'blue'}}><Ons.Input
                                        value={this.state.patientPersonId}
                                        onChange={this.handlePersonId}
                                    /></td></tr>
                                    <tr><td>อายุ</td><td style={{color:'blue'}}><Ons.Input
                                        value={this.state.patientAge}
                                        onChange={this.handleAge}
                                    /></td></tr>
                                    <tr><td>ส่วนสูง</td><td style={{color:'blue'}}><Ons.Input
                                        value={this.state.patientHight}
                                        onChange={this.handleHight}
                                    /></td></tr>
                                    <tr><td>น้ำหนัก</td><td style={{color:'blue'}}><Ons.Input
                                        value={this.state.patientWeight}
                                        onChange={this.handleWeight}
                                    /></td></tr>
                                    <tr><td>กรุ๊ปเลือด</td><td style={{color:'blue'}}><Ons.Select id="choose-sel" value={this.state.patientBloodtype} modifier={this.state.patientBloodtype} onChange={this.handleBloodtype}>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="O">O</option>
                                        <option value="AB">AB</option>
                                    </Ons.Select></td></tr>
                                    <tr><td>ที่อยู่</td><td style={{color:'blue'}}><Ons.Input
                                        value={this.state.patientAddress}
                                        onChange={this.handleAddress}
                                    /></td></tr>
                                    <tr><td>อาชีพ</td><td style={{color:'blue'}}><Ons.Input
                                        value={this.state.patientCareer}
                                        onChange={this.handleCareer}
                                    /></td></tr>
                                    <tr><td>สถานะ</td><td style={{color:'blue'}}><Ons.Select id="choose-sel" value={this.state.patientStatus} modifier={this.state.patientStatus} onChange={this.handleStatus}>
                                        <option value="โสด">โสด</option>
                                        <option value="แต่งงานแล้ว">แต่งงานแล้ว</option>
                                        <option value="อย่าร้างกัน">อย่าร้างกัน</option>
                                    </Ons.Select></td></tr>
                                    <tr><td>เบอร์โทรศัพท์</td><td style={{color:'blue'}}><Ons.Input
                                        value={this.state.patientPhone}
                                        onChange={this.handlePhone}
                                    /></td></tr>
                                    <tr><td>อาการ</td><td style={{color:'blue'}}><Ons.Input
                                        value={this.state.patientSymptom}
                                        onChange={this.handleSymptom}
                                    /></td></tr>
                                    <tr><td>แพ้อาหาร</td><td style={{color:'blue'}}><Ons.Input
                                        value={this.state.allergy}
                                        onChange={this.handleAllergy}
                                    /></td></tr>


                                </table></center>
                            </section>


                            <p style={{paddingTop:'30px'}}>
                                <Ons.Button onClick={this.handleClick.bind(this)}>บันทึก</Ons.Button>
                            </p>


                        </section>
                    </Ons.Page>
                </Ons.SplitterContent>
            </Ons.Splitter>
        );
    }
});


//=======================================================================================================================

var Search = React.createClass({
    getInitialState: function() {
        return {
            pid:'',
            firstName: '',
            isOpen: false

        };
    },

    handleBlack() {
        ReactDOM.render(<Menu />, document.getElementById('react'));
    },

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='center'>ค้นหาผู้ป่วย</div>
                <div className='left'><Ons.BackButton onClick={this.handleBlack}>ถอยกลับ</Ons.BackButton></div>
            </Ons.Toolbar>

        );

    },


    handleClick: function(){
        fetch('http://localhost:8080/api/patientSaves/search/findByPid?'+
            'Pid=' + this.state.pid )
            .then((response)=> response.json())
            .then((responseJson) => {

                data = responseJson;
                var pid = data.pid;
                ons.notification.alert('เจอแล้ว !!!');
                console.log('data =>' + data);
                ReactDOM.render(<Showinfo />, document.getElementById('react'));

            })
            .catch((error) => {
                ons.notification.alert('ไม่พบข้อมูล !!!');
                // console.error();
                console.log('data not found !!!')
            });
    },

    handleClick2: function() {
        ReactDOM.render(<Showinfo />, document.getElementById('react'));
    },

    handleFirstName(e) {
        this.setState({pid: e.target.value});
    },



    handleVegetableChange(vegetable) {
        this.setState({selectedVegetable: vegetable});
    },

    render: function() {
        return (

            <Ons.Page renderToolbar={this.renderToolbar}>
                <section style={{textAlign: 'center'}}>
                    <p>
                        <Ons.SearchInput
                            value={this.state.pid}
                            onChange={this.handleFirstName}
                            modifier='underbar'
                            float
                            placeholder='ค้นหาผู้ป่วยจากไปดี'/>

                    </p>


                    <p>
                        <Ons.Button onClick={this.handleClick}>ค้นหา</Ons.Button>
                    </p>
                </section>
            </Ons.Page>

        );
    }
});
// =====================================================================================================================


var Showinfo1 = React.createClass({

    getInitialState: function() {
        return {
            pid:'',
            firstName: '',
            patientLastName: '',
            patientAge: '',
            patientHight: '',
            patientSymptom:'',
            patientAddress: '',
            patientBloodtype: '',
            patientWeight : '',
            patientCareer : '',
            patientPersonId:'',
            patientStatus: '',
            patientPhone: '',
            allergy:''
        };
    },
    handleBlack: function() {
        ReactDOM.render(<Menu />, document.getElementById('react'));
    },

    renderToolbar: function() {
        return (
            <Ons.Toolbar>
                <div className='center'>แสดงข้อมูล</div>


            </Ons.Toolbar>
        );
    },

    handleClick: function(){
        ReactDOM.render(<Menu />, document.getElementById('react'));
    },

    handleId(e) {
        this.setState({patientId: e.target.value});
    },

    handleFirstName(e) {
        this.setState({firstName: e.target.value});
    },

    handleLastName(e) {
        this.setState({patientLastName: e.target.value});
    },

    handlePersonId(e) {
        this.setState({patientPersonId: e.target.value});
    },

    handleAge(e) {
        this.setState({patientAge: e.target.value});
    },

    handleHight(e) {
        this.setState({patientHight: e.target.value});
    },

    handleWeight(e) {
        this.setState({patientWeight: e.target.value});
    },
    handleBloodtype(e) {
        this.setState({patientBloodtype: e.target.value});
    },

    handleAddress(e) {
        this.setState({patientAddress: e.target.value});
    },

    handleCareer(e) {
        this.setState({patientCareer: e.target.value});
    },

    handleStatus(e) {
        this.setState({patientStatus: e.target.value});
    },

    handlePhone(e) {
        this.setState({patientPhone: e.target.value});
    },

    handleSymptom(e) {
        this.setState({patientSymptom: e.target.value});
    },

    hide() {
        this.setState({isOpen: false});
    },

    show() {
        this.setState({isOpen: true});
    },


    render: function() {
        return (
            <Ons.Splitter>

                <Ons.SplitterContent>
                    <Ons.Page renderToolbar={this.renderToolbar}>
                        <section style={{fontSize:'15px',margin:'5px',textAlign:'center'}}>
                            <center><table>
                                <tr><td>ชื่อ</td><td style={{color:'blue'}}>{firstName}</td></tr>
                                <tr><td>นาสกุล</td><td style={{color:'blue'}}>{patientLastName}</td></tr>
                                <tr><td>รหัสบัตรประชาชน</td><td style={{color:'blue'}}>{patientPersonId}</td></tr>
                                <tr><td>อายุ</td><td style={{color:'blue'}}>{patientAge}</td></tr>
                                <tr><td>ส่วนสูง</td><td style={{color:'blue'}}>{patientHight}</td></tr>
                                <tr><td>น้ำหนัก</td><td style={{color:'blue'}}>{patientWeight}</td></tr>
                                <tr><td>กรุ๊ปเลือด</td><td style={{color:'blue'}}>{patientBloodtype}</td></tr>
                                <tr><td>ที่อยู่</td><td style={{color:'blue'}}>{patientAddress}</td></tr>
                                <tr><td>อาชีพ</td><td style={{color:'blue'}}>{patientCareer}</td></tr>
                                <tr><td>สถานะ</td><td style={{color:'blue'}}>{patientStatus}</td></tr>
                                <tr><td>เบอร์โทรศัพท์</td><td style={{color:'blue'}}>{patientPhone}</td></tr>
                                <tr><td>อาการ</td><td style={{color:'blue'}}>{patientSymptom}</td></tr>
                                <tr><td>แพ้อาหาร</td><td style={{color:'blue'}}>{allergy}</td></tr>

                            </table></center>
                        </section>




                        <div style={{ textAlign: 'center' }}>
                            <Ons.Button onClick={this.handleBlack.bind(this)}><h3>กลับไปเมนู</h3></Ons.Button>
                        </div>


                    </Ons.Page>
                </Ons.SplitterContent>
            </Ons.Splitter>
        );
    }
});

//================================================================================================================
//=================================================เSefe==========================================================
//================================================================================================================

class SumRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id:props.id,saveRooms:[],rooms:[]};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/saveRooms'}).done(response => {
            this.setState({saveRooms: response.entity._embedded.saveRooms});
        });
    }

    renderRow1(row,index) {
        return(

                <Ons.List style={{width: '100%'}}
                          tappable
                          key={row._links.self.href}
                          data={row}
                >

                    <td style={{width:'20px'}}>
                        <center>{index+1}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center>{row._embedded.patientsave.firstName}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center>{row._embedded.patientsave.patientLastName}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center>{row._embedded.patientsave.patientPhone}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center> {row._embedded.room.type_room}</center>
                    </td>
                    <td style={{width:"100px"}}>
                        <center> {row._embedded.room.number_bed}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center>{row._embedded.room.function}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center>{new Date(row.dateIn).getDate()}-{new Date(row.dateIn).getMonth()+1}-{new Date(row.dateIn).getFullYear()}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center>{new Date(row.dateOut).getDate()}-{new Date(row.dateOut).getMonth()+1}-{new Date(row.dateOut).getFullYear()}</center>
                    </td>


                </Ons.List>
        )
    }
    //{new Date(row.dateIn).getDate()}{new Date(row.dateIn).getMonth()+1}{new Date(row.dateIn).getFullYear()}

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
                <div className='center'>สรุปผล</div>
            </Ons.Toolbar>
        );
    }
    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                <h4 style={{textAlign:'center'}}>สรุปผลทั้งหมด</h4>

                <Ons.Card style={{width:'100%'}}>
                    <Ons.List>

                        <td style={{width:'20px'}}><center>ที่</center></td>
                        <td style={{width:"200px"}}><center>ชื่อ ผู้ป่วย</center></td>
                        <td style={{width:"200px"}}><center>นามสกุล ผู้ป่วย</center></td>
                        <td style={{width:"200px"}}><center>เบอร์โทรศัพท์</center></td>
                        <td style={{width:"200px"}}><center>ชนิดห้องที่พัก</center></td>
                        <td style={{width:"100px"}}><center>เลขเตียง</center></td>
                        <td style={{width:"200px"}}><center>Fucntion Bed</center></td>
                        <td style={{width:"200px"}}><center>วันที่เข้าพัก</center></td>
                        <td style={{width:"200px"}}><center>วันที่ออกพัก</center></td>
                    </Ons.List>
                </Ons.Card>

                <Ons.Card>
                    <Ons.List
                        dataSource={this.state.saveRooms}
                        renderRow={this.renderRow1}
                    />
                </Ons.Card>

            </Ons.Page>
        );
    }
}


class SpecialRoom extends React.Component{
    constructor(props) {
        alertDialogShown: false
        super(props);
        this.state = {id:props.id,
            Nbed:null,
            dateIn:null,
            dateOut:null,
            roomsent:"พิเศษ"
        };
    }
    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
                <div className='center'>Select Femele Room</div>
            </Ons.Toolbar>
        );
    }
    showAlertDialog(temp) {this.state.Nbed=temp; this.setState({alertDialogShown: true});   }
    hideAlertDialog() {this.setState({alertDialogShown: false});   }

    BCheck1(id,nbed){
        nbed=nbed-16;
        client({method: 'GET', path: '/ID_Patient/'+this.state.id+'/ID_Room/'+this.state.Nbed+'/dateIn/'+this.state.dateIn+'/dateOut/'+this.state.dateOut}).done(
            ons.notification.alert("Patient ID ="+id+"<br/>ห้องเบอร์ ="+nbed))
        this.props.navigator.resetPage({ component: Menu, props: { key: 'Menu' } },{animation:"none"});
    }
    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                <h4 style={{textAlign:'center'}}>กรุณาเลือกห้องให้ Patient ID:{this.state.id}</h4>

                <Ons.AlertDialog
                    isOpen={this.state.alertDialogShown}
                    isCancelable={false}>
                    <div className='alert-dialog-title'>กรุณาเลือกวันเข้าและออก<br/>(ห้องเบอร์:{this.state.Nbed})</div>
                    <div className='alert-dialog-content'>
                        <p>วันที่เข้า
                            <Ons.Input type='date' value={this.state.value} onChange={evt => this.setState({ dateIn: evt.target.value })}/>
                        </p>
                        <p>วันที่ออก
                            <Ons.Input type='date' value={this.state.value} onChange={evt => this.setState({ dateOut: evt.target.value })}/>
                        </p>
                    </div>
                    <div className='alert-dialog-footer'>
                        <button onClick={this.hideAlertDialog.bind(this)} className='alert-dialog-button'>
                            Cancel
                        </button>
                        <button onClick={this.BCheck1.bind(this,this.state.id,this.state.Nbed)} className='alert-dialog-button'>
                            Ok
                        </button>
                    </div>
                </Ons.AlertDialog>


                <div style={{ textAlign: 'center' }}>
                    <img src={"image/BedSpecial/Bed_Special1.png"} alt="Bed_Special1.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,17)} />&nbsp;&nbsp;
                    <img src={"image/BedSpecial/Bed_Special2.png"} alt="Bed_Special2.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,18)} />&nbsp;&nbsp;
                    <img src={"image/BedSpecial/Bed_Special3.png"} alt="Bed_Special3.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,19)} />&nbsp;&nbsp;
                    <img src={"image/BedSpecial/Bed_Special4.png"} alt="Bed_Special4.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,20)} />&nbsp;&nbsp;<br/>
                    <img src={"image/BedSpecial/Bed_Special5.png"} alt="Bed_Special5.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,21)} />&nbsp;&nbsp;
                    <img src={"image/BedSpecial/Bed_Special6.png"} alt="Bed_Special6.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,22)} />&nbsp;&nbsp;
                    <img src={"image/BedSpecial/Bed_Special7.png"} alt="Bed_Special7.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,23)} />&nbsp;&nbsp;
                    <img src={"image/BedSpecial/Bed_Special8.png"} alt="Bed_Special8.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,24)} />&nbsp;&nbsp;

                </div>
            </Ons.Page>
        );
    }

}

class Room1Femele extends React.Component{
    constructor(props) {
        alertDialogShown: false
        super(props);
        this.state = {id:props.id,
            Nbed:null,
            dateIn:null,
            dateOut:null,
            roomsent:"รวมหญิง"
        };


    }
    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
                <div className='center'>Select Femele Room</div>
            </Ons.Toolbar>
        );
    }
    showAlertDialog(temp) {this.state.Nbed=temp; this.setState({alertDialogShown: true});   }
    hideAlertDialog() {this.setState({alertDialogShown: false});   }

    BCheck1(id,nbed){
        nbed=nbed-8;
        client({method: 'GET', path: '/ID_Patient/'+this.state.id+'/ID_Room/'+this.state.Nbed+'/dateIn/'+this.state.dateIn+'/dateOut/'+this.state.dateOut}).done(
            ons.notification.alert("Patient ID ="+id+"<br/>ห้องหญิงรวม<br/>เตียงเบอร์ ="+nbed))
        this.props.navigator.resetPage({ component: Menu, props: { key: 'Menu' } },{animation:"none"});
    }
    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                <h4 style={{textAlign:'center'}}>กรุณาเลือกห้องให้ Patient ID:{this.state.id}</h4>

                <Ons.AlertDialog
                    isOpen={this.state.alertDialogShown}
                    isCancelable={false}>
                    <div className='alert-dialog-title'>กรุณาเลือกวันเข้าและออก<br/>(เตียงเบอร์:{this.state.Nbed-8})</div>
                    <div className='alert-dialog-content'>
                        <p>วันที่เข้า
                            <Ons.Input type='date' value={this.state.value} onChange={evt => this.setState({ dateIn: evt.target.value })}/>
                        </p>
                        <p>วันที่ออก
                            <Ons.Input type='date' value={this.state.value} onChange={evt => this.setState({ dateOut: evt.target.value })}/>
                        </p>
                    </div>
                    <div className='alert-dialog-footer'>
                        <button onClick={this.hideAlertDialog.bind(this)} className='alert-dialog-button'>
                            Cancel
                        </button>
                        <button onClick={this.BCheck1.bind(this,this.state.id,this.state.Nbed)} className='alert-dialog-button'>
                            Ok
                        </button>
                    </div>
                </Ons.AlertDialog>


                <div style={{ textAlign: 'center' }}>
                    <img src={"image/bed/Bed1.png"} alt="Bed1.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,9)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed2.png"} alt="Bed2.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,10)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed3.png"} alt="Bed3.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,11)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed4.png"} alt="Bed4.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,12)} />&nbsp;&nbsp;<br/>
                    <img src={"image/bed/Bed5.png"} alt="Bed5.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,13)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed6.png"} alt="Bed6.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,14)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed7.png"} alt="Bed7.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,15)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed8.png"} alt="Bed8.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,16)} />&nbsp;&nbsp;

                </div>
            </Ons.Page>
        );
    }

}

class Room1Man extends React.Component{
    constructor(props) {
        alertDialogShown: false
        super(props);
        this.state = {id:props.id,
            Nbed:null,
            dateIn:null,
            dateOut:null,
            roomsent:"รวมชาย"
        };


    }
    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
                <div className='center'>Select Man Room</div>
            </Ons.Toolbar>
        );
    }
    showAlertDialog(temp) {this.state.Nbed=temp; this.setState({alertDialogShown: true});   }
    hideAlertDialog() {this.setState({alertDialogShown: false});   }

    BCheck1(id,nbed){
        client({method: 'GET', path: '/ID_Patient/'+this.state.id+'/ID_Room/'+this.state.Nbed+'/dateIn/'+this.state.dateIn+'/dateOut/'+this.state.dateOut}).done(
            ons.notification.alert("Patient ID ="+id+"<br/>ห้องชายรวม<br/>เตียงเบอร์ ="+nbed))
        this.props.navigator.resetPage({ component: Menu, props: { key: 'Menu' } },{animation:"none"});
    }
    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                <h4 style={{textAlign:'center'}}>กรุณาเลือกห้องให้ Patient ID:{this.state.id}</h4>

                <Ons.AlertDialog
                    isOpen={this.state.alertDialogShown}
                    isCancelable={false}>
                    <div className='alert-dialog-title'>กรุณาเลือกวันเข้าและออก<br/>(เตียงเบอร์:{this.state.Nbed})</div>
                    <div className='alert-dialog-content'>
                        <p>วันที่เข้า
                            <Ons.Input type='date' value={this.state.value} onChange={evt => this.setState({ dateIn: evt.target.value })}/>
                        </p>
                        <p>วันที่ออก
                            <Ons.Input type='date' value={this.state.value} onChange={evt => this.setState({ dateOut: evt.target.value })}/>
                        </p>
                    </div>
                    <div className='alert-dialog-footer'>
                        <button onClick={this.hideAlertDialog.bind(this)} className='alert-dialog-button'>
                            Cancel
                        </button>
                        <button onClick={this.BCheck1.bind(this,this.state.id,this.state.Nbed)} className='alert-dialog-button'>
                            Ok
                        </button>
                    </div>
                </Ons.AlertDialog>


                <div style={{ textAlign: 'center' }}>
                    <img src={"image/bed/Bed1.png"} alt="Bed1.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,1)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed2.png"} alt="Bed2.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,2)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed3.png"} alt="Bed3.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,3)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed4.png"} alt="Bed4.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,4)} />&nbsp;&nbsp;<br/>
                    <img src={"image/bed/Bed5.png"} alt="Bed5.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,5)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed6.png"} alt="Bed6.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,6)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed7.png"} alt="Bed7.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,7)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed8.png"} alt="Bed8.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,8)} />&nbsp;&nbsp;

                </div>
            </Ons.Page>
        );
    }

}

class SelectRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state={id:props.id};
        dialogShown: false
    }
    showDialog(){this.setState({dialogShown: true});  }
    hideDialog(){this.setState({dialogShown: false});  }

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
                <div className='center'>SelectRoom</div>
                <div className='right'>
                    <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
                        <Ons.Icon icon='ion-navicon, material:md-menu' />
                    </Ons.ToolbarButton>
                </div>
            </Ons.Toolbar>
        );
    }
    showMenu() {this.props.showMenu();  }

    pushRoom1Femele() {this.setState({dialogShown: false}); this.props.navigator.pushPage({ component: Room1Femele, props: { key: 'Room1Femele',id:this.state.id } },{animation:"none"});  }
    pushRoom1Man() {this.setState({dialogShown: false}); this.props.navigator.pushPage({ component: Room1Man, props: { key: 'Room1Man',id:this.state.id } },{animation:"none"});  }
    SpecialRoom() {this.props.navigator.pushPage({ component: SpecialRoom, props: { key: 'SpecialRoom',id:this.state.id } },{animation:"none"});  }

    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                <h4 style={{textAlign:'center'}}>Please select type of room for Patient ID: {this.state.id}</h4>
                <div style={{ textAlign: 'center' }}>
                    <br />

                    <Ons.Dialog isOpen={this.state.dialogShown} isCancelable={true} onCancel={this.hideDialog}>
                        <div style={{textAlign: 'center', margin: '20px'}}>
                            <p style={{opacity: 0.5}}>Please Select Sex of patient</p>
                            <p>
                                <Ons.Button style={{margin: '6px'},{width: '100px'}} modifier='outline' onClick={this.pushRoom1Man.bind(this)}>Man</Ons.Button>
                                &nbsp;&nbsp;
                                <Ons.Button style={{margin: '6px'},{width: '100px'}} modifier='outline' onClick={this.pushRoom1Femele.bind(this)}>Female</Ons.Button>
                            </p>
                        </div>
                    </Ons.Dialog>

                    <Ons.Button style={{margin: '6px'}} modifier='outline' onClick={this.showDialog.bind(this)}>ห้องรวม</Ons.Button>
                    <Ons.Button style={{margin: '5px'}} modifier='outline' onClick={this.SpecialRoom.bind(this)}>ห้องพิเศษ</Ons.Button>
                </div>

            </Ons.Page>
        );
    }
}

class FindID extends React.Component {
    constructor(props) {
        super(props);
        this.state = {patients: []};
        this.state = {id:null,patientslength:null};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/patientSaves'}).done(response => {
            this.setState({patients: response.entity._embedded.patientSaves});
        });
        client({method: 'GET', path: '/api/patientSaves'}).done(response => {
            this.setState({patientslength: response.entity._embedded.patientSaves.length});
        });

    }
    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'></div>
                <div className='center'>Find ID Patient</div>
                <div className='right'>
                    <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
                        <Ons.Icon icon='ion-navicon, material:md-menu' />
                    </Ons.ToolbarButton>
                </div>
            </Ons.Toolbar>
        );
    }


    showMenu() {this.props.showMenu();  }
    pushPage() {
        var i=0;
        var k=0;
        for(var i=0 ; i<this.state.patientslength ; i++){
            if(i === this.state.id-1 ){
                ons.notification.alert('Plese Select Type of Room!');
                this.props.navigator.pushPage({ component: SelectRoom, props: { key: 'SelectRoom',id:i+1 } },{animation:"none"});
                break;
            }
            else{
                k++;
                if(k>0 && i=== this.state.patientslength-1){
                    ons.notification.alert('incorrect!');
                    k = 0;
                }
            }
        }
    }



    pushPageSum() {this.props.navigator.pushPage({ component: SumRoom, props: { key: 'SumRoom',id:this.state.id } },{animation:"none"});  }

    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                <h4 style={{textAlign:'center'}}>กรอกID Patient เพื่อทำการเลือกห้อง</h4>
                <div style={{ textAlign: 'center' }}>
                    <p>
                        <Ons.SearchInput
                            value={this.state.id}
                            onChange={evt => this.setState({ id: evt.target.value })}
                            placeholder='Search ID Patient' />
                    </p>

                    <Ons.Button onClick={this.pushPage.bind(this)}>Search</Ons.Button>
                    &nbsp;&nbsp;&nbsp;
                    <Ons.Button onClick={this.pushPageSum.bind(this)}>สรุปผลการใช้ห้อง</Ons.Button>
                </div>

            </Ons.Page>
        );
    }
}

class AppA extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.loadPage = this.loadPage.bind(this);
    }
    hide() {this.setState({ isOpen: false });  }
    show() {this.setState({ isOpen: true });  }

    loadPage(page) {this.hide();
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
                <Ons.SplitterSide side='right' width={90} collapse={true} swipeable={true} isOpen={this.state.isOpen} onClose={this.hide.bind(this)} onOpen={this.show.bind(this)}>
                    <Ons.Page>
                        <Ons.List>
                            <Ons.ListItem key='FindID' onClick={this.loadPage.bind(this, FindID)} tappable>FindID</Ons.ListItem>
                        </Ons.List>
                    </Ons.Page>
                </Ons.SplitterSide>
                <Ons.SplitterContent>
                    <Ons.Navigator initialRoute={{ component: FindID, props: { key: 'FindID' } }} renderPage={this.renderPage.bind(this)} ref={(navigator) => { this.navigator = navigator; }} />
                </Ons.SplitterContent>
            </Ons.Splitter>
        );
    }
}
//=================================================================================================================
//============================================================P.Two===============================================================================

class Oreo extends React.Component {
    constructor(props) {
        super(props);
        this.state={schedules:[]};

    }
    handleBlack(){
        ReactDOM.render(<Menu />, document.getElementById('react'));
    }

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton onClick={this.handleBlack.bind(this)}>ถอยกลับ</Ons.BackButton></div>
                <div className='center'>สรุป</div>

            </Ons.Toolbar>
        );
    }
    componentDidMount() {
        client({method: 'GET', path: '/api/schedules'}).done(response => {
            this.setState({schedules: response.entity._embedded.schedules});
        });
        client({method: 'GET', path: '/api/schedules'}).done(response => {
            this.setState({scheduleslength: response.entity._embedded.schedules.length});
        });

    }
    renderRow1(row,index) {
        return(
            <center>
                <Ons.List style={{width: '100%'}}
                          tappable
                          key={row._links.self.href}
                          data={row}
                >

                    <td style={{width:'20px'}}>
                        <center>{index+1}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center>{row._embedded.nurse.firstName}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center>{row._embedded.nurse.lastName}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center>{row.department}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center>{new Date(row.time).getDate()}-{new Date(row.time).getMonth()+1}-{new Date(row.time).getFullYear()}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center>{row.timeType}</center>
                    </td>


                </Ons.List>
            </center>
        )
    }



    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                <center><h2>สรุปผล</h2></center>
                <Ons.Card style={{width:'100%'},{textAlign:'center'}}>
                    <Ons.List>
                        <td style={{width:'20px'}}><center>ที่</center></td>
                        <td style={{width:"200px"}}><center>ชื่อ พยาบาล</center></td>
                        <td style={{width:"200px"}}><center>นามสกุล พยาบาล</center></td>
                        <td style={{width:"200px"}}><center>เข้าเวร แผนก</center></td>
                        <td style={{width:"200px"}}><center>วันที่เข้า</center></td>
                        <td style={{width:"200px"}}><center>กะเข้างาน</center></td>
                    </Ons.List>
                </Ons.Card>
                <Ons.Card>
                    <Ons.List
                        dataSource={this.state.schedules}
                        renderRow={this.renderRow1}
                    />

                </Ons.Card>
            </Ons.Page>
        );
    }
}
class Setassign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id:props.id,
            department:'',
            date:'',
            time_type:''
        };
    }
    handleBlack(){
        ReactDOM.render(<Menu />, document.getElementById('react'));
    }

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton onClick={this.handleBlack.bind(this)}>ถอยกลับ</Ons.BackButton></div>
                <div className='center'>จัดห้อง</div>

            </Ons.Toolbar>
        );
    }



    pushPageSum(){
        client({method: 'GET', path: '/ID/'+this.state.id+'/department/'+this.state.department+'/date/'+this.state.date+'/timeType/'+this.state.time_type}).done(
            ons.notification.alert("ID Nurse: "+id+"<br/>Department: "+department+"Date: "+date))
        this.props.navigator.resetPage({ component: Manu, props: { key: 'Manu' } },{animation:"none"});
    }



    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                <center><h2>จัดเวร</h2></center>
                <Ons.Card>
                    <div style={{textAlign: 'center'}}>
                        เลือกแผนก
                        <Ons.Select value={this.state.department} modifier={this.state.department} onChange={evt => this.setState({ department: evt.target.value })}>
                            <option value="อายุรกรรม">อายุรกรรม</option>
                            <option value="ICU">ICU</option>
                        </Ons.Select>
                        <br/>
                        วันเวลาทำเวร
                        <Ons.Input
                            value={this.state.date}
                            onChange={evt => this.setState({ date: evt.target.value })}
                            type='date'
                        />
                        <br/>
                        เลื่อกเวร
                        <Ons.Select id="choose-sel" value={this.state.time_type} modifier={this.state.time_type} onChange={evt => this.setState({ time_type: evt.target.value })}>
                            <option value="เช้า">เช้า</option>
                            <option value="บ่าย">บ่าย</option>
                            <option value="ดึก">ดีก</option>
                        </Ons.Select>

                    </div>
                </Ons.Card>

                <center>
                    <Ons.Button onClick={this.pushPageSum.bind(this)}>
                        Submit
                    </Ons.Button>
                </center>

            </Ons.Page>
        );
    }
}

class AssignTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nurses: [],i:1};
        this.state = {id:null,
            password:null,
            nurseslength:null};
    }

    handleBlack(){
        ReactDOM.render(<Menu />, document.getElementById('react'));
    }
    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton onClick={this.handleBlack.bind(this)}>ถอยกลับ</Ons.BackButton></div>
                <div className='center'>จัจัดเวรพยาบาล</div>
                <div className='right'>
                    <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
                        <Ons.Icon icon='ion-navicon, material:md-menu' />
                    </Ons.ToolbarButton>
                </div>
            </Ons.Toolbar>
        );
    }

    showMenu() {
        this.props.showMenu();
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/nurses'}).done(response => {
            this.setState({nurses: response.entity._embedded.nurses});
        });
        client({method: 'GET', path: '/api/nurses'}).done(response => {
            this.setState({nurseslength: response.entity._embedded.nurses.length});
        });

    }
    pushPage1(){
        this.props.navigator.resetPage({ component: Oreo, props: { key: 'Oreo'} },{animation:"none"});

    }
    pushPage() {
        var i=0;
        var k=0;
        for(var i=0 ; i<this.state.nurseslength ; i++){
            if(i === this.state.id-1 ){
                ons.notification.alert('Plese in put Data!');
                this.props.navigator.resetPage({ component: Setassign, props: { key: 'Setassign',id:i+1 } },{animation:"none"});
                break;
            }
            else{
                k++;
                if(k>0 && i=== this.state.nurseslength-1){
                    ons.notification.alert('incorrect!');
                    k = 0;
                }
            }
        }

    }

    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

                <div style={{ textAlign: 'center' }}>
                    <h3>กรุณาล็อกอินเพื่อจัดตารางเวร</h3>

                    <p>
                        <Ons.Input
                            value={this.state.id}
                            onChange={evt => this.setState({ id: evt.target.value })}
                            modifier='underbar'
                            float
                            placeholder='ID Nurse' />
                    </p>

                    <Ons.Button onClick={this.pushPage.bind(this)}>
                        Find Nurse
                    </Ons.Button>
                    &nbsp;&nbsp;&nbsp;
                    <Ons.Button onClick={this.pushPage1.bind(this)}>
                        ประวัติการจัดเวร
                    </Ons.Button>
                </div>

            </Ons.Page>
        );
    }
}

class AppTwo extends React.Component {
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
                <Ons.SplitterSide side='right' width={220} collapse={true} swipeable={true} isOpen={this.state.isOpen} onClose={this.hide.bind(this)} onOpen={this.show.bind(this)}>
                    <Ons.Page>
                        <Ons.List>
                            <Ons.ListItem key='AssignTime' onClick={this.loadPage.bind(this, AssignTime)} tappable>ล็อกอิน</Ons.ListItem>

                            <Ons.ListItem key='Setassign' onClick={this.loadPage.bind(this, Setassign)} tappable>จัดตารางเวร</Ons.ListItem>
                        </Ons.List>
                    </Ons.Page>
                </Ons.SplitterSide>
                <Ons.SplitterContent>
                    <Ons.Navigator initialRoute={{ component: AssignTime, props: { key: 'AssignTime' } }} renderPage={this.renderPage.bind(this)} ref={(navigator) => { this.navigator = navigator; }} />
                </Ons.SplitterContent>
            </Ons.Splitter>
        );
    }
}

/////////////////////////////////////////////PAK////////////////////////////////////////////////////////
class ManageDiagnose extends React.Component {
    constructor(props) {
      super(props);
      this.state = {diagnoses: []};
      this.state = {
        title: props.title ? props.title : 'Custom Page',
        nextTitle: null,
       // d_patient:data.firstName+" "+data.patientLastName,
        dialogShown: false
       
      };
  
    }
    componentDidMount() {
     
      client({method: 'GET', path: '/api/diagnoses'}).done(response => {
        this.setState({diagnoses: response.entity._embedded.diagnoses});
    });
  
    }
  
  
  
    renderToolbar() {
      return (
        <Ons.Toolbar>
            
          {/*<div className='left'><Ons.BackButton>Back</Ons.BackButton></div>*/}
          <div className='center'>วินิจฉัยโรค</div>
          <div className="right" paddingRight="20px" paddingLeft="20px"></div>
        </Ons.Toolbar>
      );
    }
  
    showDialog() {
      this.setState({dialogShown: true});
      
    }
    showDialog1() {
      this.setState({dialogShown1: true});
      
    }
  
    hideDialog() {
      this.setState({dialogShown: false});
      
      client({method: 'GET', path: '/api/diagnoses'}).done(response => {
        this.setState({diagnoses: response.entity._embedded.diagnoses});
    });
      //this.props.navigator.resetPage({component: ManageDiagnose,key: 'ManageDiagnose',},{ animation: 'fade' }); 
      ReactDOM.render(<Menu />, document.getElementById('react'));  
  
    }
  
    pushPageAddDiagnose() {
     // this.props.navigator.pushPage({ component: SearchP, props: { key: 'SearchP' } });
      ReactDOM.render(<SearchP />, document.getElementById('react'));
     // <Ons.Button onClick={this.pushPageSum.bind(this)}>สรุปผลการใช้ห้อง</Ons.Button>
      
    }
    
    pushPagePrintDiagnose() {
     // this.props.navigator.pushPage({ component: PrintDiagnose, props: { key: 'PrintDiagnose' } });
      ReactDOM.render(<SearchPrintDiagnose />, document.getElementById('react'));
    }
  
    resetPage(){
      //this.props.navigator.resetPage({component : ManageDiagnose, props: {key : 'ManageDiagnose' } });
      ReactDOM.render(<ManageDiagnose />, document.getElementById('react'));
    }
  
   
    
    handleClickDelete(diagnose,index) {
      client({method: 'DELETE', path: diagnose._links.self.href   }).done(response =>{  
        ons.notification.alert('เลือก ' + diagnose.d_patient );
      }); 
    };
  
    handlePushManager(){  
      //this.props.navigator.resetPage({component: ManageDiagnose,key: 'ManageDiagnose',},{ animation: 'fade' });    
      ReactDOM.render(<ManageDiagnose />, document.getElementById('react'));  
    }
       
  
    renderRow(row, index) {
      return(
        <Ons.ListItem 
            key={row._links.self.href}
            data={row}
            >
            <div className='left' style={{width: '100px'}}>
                {index+1}
            </div>
            <div className="center">
            {row.d_patient}
            </div>
            <div className='right'>
              <Ons.Icon icon='md-delete' size="30px"/>
              &nbsp;&nbsp;&nbsp;
              <Ons.Checkbox
              inputId={`checkbox-${row}`}
              onClick={this.handleClickDelete.bind(this, row, index)}
              />
            </div>
        </Ons.ListItem>
      )
    }
    
    render() {
      return (
  
        <Ons.Page renderToolbar={this.renderToolbar}>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <section style={{textAlign: 'center'}}>
                            <img src={"http://jvkorat.go.th/th/wp-content/uploads/2017/11/30.jpg"} alt="Onsen UI" style={{ width: '25%' }} />
                         </section>
      <p style={{textAlign: 'right', paddingTop:'10px', paddingRight:'20px'}}>  
      <Ons.Button 
            onClick={this.pushPagePrintDiagnose.bind(this)}> 
          <Ons.Icon icon='ion-printer' /> พิมพ์ผล วินิจฉัยโรคทั้งหมด 
          </Ons.Button> 
          &nbsp;&nbsp;&nbsp;
          <Ons.Button 
          modifier='outline'
            onClick={this.pushPageAddDiagnose.bind(this)}> 
          <Ons.Icon icon='ion-android-clipboard' /> เพิ่มรายละเอียด วินิจฉัยโรค
          </Ons.Button>
        &nbsp;&nbsp;&nbsp;
        <Ons.Button 
          style={{backgroundColor: 'red'}}
          onClick={this.showDialog.bind(this)}>
          <Ons.Icon icon='md-delete' size="30px"/>
          &nbsp;&nbsp;
          ลบ
        </Ons.Button>    
        &nbsp;&nbsp;&nbsp;
        <Ons.Button 
          onClick={this.showDialog1.bind(this)}>
          <Ons.Icon icon='ion-navicon-round' size="30px"/>
          &nbsp;&nbsp;
          Menu
        </Ons.Button>    
      </p>
      
      <section style={{textAlign: 'center'}}>
        <Ons.List>
          <Ons.ListItem style={{backgroundColor: '#c6c6c6'}}>
            <div className='left' style={{width: '100px'}}>
              <b>No.</b>
            </div>
            <div className="center" >
            <b>Patient</b>
            </div>
            <div className='right'>
            <b>Delete</b>
            </div>
          </Ons.ListItem>
       </Ons.List>
       <Ons.List
          dataSource={this.state.diagnoses}
          renderRow={this.renderRow}
          handleClickDelete={this.handleClickDelete} 
        />       
          </section>
      
          <Ons.Dialog
        isOpen={this.state.dialogShown1}
      >
              <div style={{textAlign: 'center', margin: '20px'}}>
                <p style={{opacity: 0.5}}>ต้องการ กลับไปหน้า menu ?</p>
                <p>
                  <Ons.Button
                  onClick={this.hideDialog.bind(this)}
                  >
                   ใช่
                  </Ons.Button>
                </p>
              </div>
            </Ons.Dialog>
  
      <Ons.Dialog
        isOpen={this.state.dialogShown}
      >
              <div style={{textAlign: 'center', margin: '20px'}}>
                <p style={{opacity: 0.5}}>ต้องการ "ลบ" ?</p>
                <p>
                  <Ons.Button
                  onClick={this.hideDialog.bind(this)}
                  >
                   ลบเเล้ว
                  </Ons.Button>
                </p>
              </div>
            </Ons.Dialog>
          
        </Ons.Page>
      );
    }
  }
  //----------------------------------------------------
  
  class SearchP extends React.Component {
  
      constructor(props) {
          super(props);
  
          this.state = {
              title: props.title ? props.title : 'Custom Page',
              nextTitle: null
    
          }
      }
  
      push() {
  
          fetch('http://localhost:8080/api/patientSaves/search/findByPid?'+
              'Pid=' + this.state.pid )
  
              .then((response)=> response.json())
              .then((responseJson) => {
  
                  data = responseJson;
                  console.log('data =>' + data);
  
          pid = this.state.pid;
        
  
                  //this.props.navigator.pushPage({ component: AddDiagnose,props: { key: 'AddDiagnose'} });
                  ReactDOM.render(<AddDiagnose />, document.getElementById('react'));
  
              })
              .catch((error) => {
                  ons.notification.alert('ไม่พบไอดีคนไข้ !');
                  console.log('data not found !!!')
              });
  
  
      }
  
      handlePushManager(){  
          //this.props.navigator.resetPage({component: ManageDiagnose,key: 'ManageDiagnose',},{ animation: 'fade' });    
          ReactDOM.render(<ManageDiagnose />, document.getElementById('react'));  
        }
  
  
         renderToolbar() {
          return (
                <Ons.Toolbar>
                  {/* <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>*/}
                   <div className='center'>ระบบวินิจฉัยโรค</div>
  
                </Ons.Toolbar>
          );
      }
  
      render() {
          return (
              <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
              <div style={{ textAlign: 'center' }}>
  
              <h1>ผู้ป่วย</h1>
              <br/>
              <h4>ค้นหา ไอดีคนไข้</h4>
              <p>
              <br/>
                  <Ons.Input
                      value={this.state.pid}
                      onChange={evt => this.setState({pid: evt.target.value})}
                      modifier='underbar'
                      float
                      placeholder='ไอดีผู้ป่วย' />
              </p>
              <br/>
              <Ons.Button onClick={this.push.bind(this)}>Search</Ons.Button>
  
              <br/><br/><br/>
              <Ons.Button onClick={this.handlePushManager.bind(this)}>กลับสู่หน้า รายชื่อ</Ons.Button> 
              <section style={{textAlign: 'center'}}>
                  <img src={"https://lisaguru.com/wp-content/uploads/2017/01/ba_v9nvwuRRN5y81ktWR0BrExLtZACQQH_lSYSnrJdePNoR7SNZ1484313638ToqyXa0WNELDlk_chSAJAQ_pDngLe4K8049035300.jpg"} alt="Onsen UI" style={{ width: '20%' }} />
              </section>
        </div>
        </Ons.Page>
          );
      }
  
  }
  
  
  
  // ----------------------------------------------- AddDiagnose
  class AddDiagnose extends React.Component {
    constructor(props) {
      super(props);
      this.state = {patientSaves: []};
      this.handleClick = this.handleClick.bind(this); 
      isOpen: false;
     // this.handleSelectPa = this.handleSelectedPa.bind(this);
      this.state = {
      //  date: new Date(),
        blood:'',
        urin:'',
        spinal_cord:'',
        infection:'',
        microbiological_culture:'',
        x_sray:'',
        ultraSound:'',
        mri:'',
        biopsy:'',
        autopsy:'',
        d_patient: data.firstName+' '+data.patientLastName,
        d_doctor: nfemp+nlemp
        
        
        
        
      }
    }
  
    
    showDialog() {
      if(this.state.blood == null || this.state.urin == null ||
        this.state.spinal_cord == null||
        this.state.infection == null || this.state.microbiological_culture == null || this.state.x_sray == null ||
        this.state.ultraSound == null || this.state.mri == null || this.state.biopsy == null || this.state.autopsy == null ||this.state.d_patient == null ||this.state.d_doctor == null 
      ){
        ons.notification.alert('กรุณากรอกข้อมูลให้ครบ!')
      }else{
        this.setState({dialogShown: true});
      }
    }  
  
      renderToolbar() {
        return (
          <Ons.Toolbar>
         {/* <div className='left'><Ons.BackButton>Back</Ons.BackButton></div> */}
          <div className='center'>  <Ons.Icon icon='md-account' /> วินิจฉัยโรคผู้ป่วย
          </div>
          </Ons.Toolbar>
        );
      }
  
      componentDidMount() {
        client({method: 'GET', path: '/api/patientSaves'}).done(response => {
          this.setState({patientSaves: response.entity._embedded.patientSaves});
        });
      }
      
     handlePushManager(){  
        //this.props.navigator.resetPage({component: ManageDiagnose,key: 'ManageDiagnose',},{ animation: 'fade' });    
        ReactDOM.render(<ManageDiagnose />, document.getElementById('react'));  
      }
  
      handlePushSearchP(){  
          //this.props.navigator.resetPage({component: ManageDiagnose,key: 'ManageDiagnose',},{ animation: 'fade' });    
          ReactDOM.render(<SearchP />, document.getElementById('react'));  
        }
      
     
      
    
      handleClick(pid,lid,blood,urin,spinal_cord,infection,microbiological_culture,x_sray,ultraSound,mri,biopsy,autopsy,d_patient,d_doctor) {
        return function () { 
          client({method: 'GET', path:'/pid/'+pid+'/lid/'+lid+'/blood/'+blood+'/urin/'+urin+'/spinal_cord/'+spinal_cord+'/infection/'+infection+
                                          '/microbiological_culture/'+microbiological_culture+'/x_sray/'+x_sray+'/ultraSound/'+ultraSound+
                                              '/mri/'+mri+'/biopsy/'+biopsy+'/autopsy/'+autopsy+'/d_patient/'+d_patient+'/d_doctor/'+d_doctor}).done(ons.notification.alert("บันทึกสำเร็จ"));
                                      
        }
   
    }
  
  
  
  
    
      render() {
        return (
          <Ons.Page renderToolbar={this.renderToolbar}>
            <section style={{textAlign: 'center'}}>
            <p><b>
              Date : &nbsp;&nbsp;&nbsp;{datetime}</b></p>	
           
            <Ons.List>
              <Ons.ListHeader> การวินิจฉัยทางห้องปฎิบัติการวิทยา (Laboratory diagnosis) </Ons.ListHeader>
            </Ons.List>
              <center> 	
                      <p>
                      <center>
                <Ons.Input modifier="underbar" 
                  placeholder="ตรวจเลือด" 
                  float 
                  onChange={evt => this.setState({ blood: evt.target.value })} >
                      
                </Ons.Input>
                </center>
              </p>
                  <p> 
                  <center>
                  <table><tr><td><b>ตรวจปัสสาวะ : </b></td><td>
                 
                <Ons.Select id="choose-sel"
                 value={this.state.position} 
                 modifier={this.state.position} 
                 onChange={evt => this.setState({urin: event.target.value})} > 
                 <option >โปรดเลือก..</option>
                   <option value="normal">สีปกติ(เหลืองอ่อน-เหลืองปานกลาง)</option>
                   <option value="red">สีอมแดง</option>
                   <option value="blown">สีน้ำตาล</option>
                   <option value="very white">สีปัสสาวะมีสีขุ่นขาวมาก</option>
                   <option value="like milk">สีคล้ายน้ำนม</option>
                   <option value="orange">สีส้ม</option>
                   <option value="very yellow">สีเหลืองเข้ม</option>
                   <option value="blue-">สีน้ำเงิน-ฟ้าอ่อนๆ</option>
                  
                 </Ons.Select>
                 </td></tr></table>
                  </center>       
              </p>
              <p> 
              <center>
                <Ons.Input modifier="underbar" 
                  placeholder="ตรวจน้ำไขสันหลัง" 
                  float 
                  onChange={evt => this.setState({ spinal_cord: evt.target.value })} >     
                </Ons.Input>
                </center>
              </p>
              <p> 
              <center>
                <Ons.Input modifier="underbar" 
                  placeholder="ตรวจเชื้อ" 
                  float 
                  onChange={evt => this.setState({ infection: evt.target.value })} >     
                </Ons.Input>
                </center>
              </p>
              <p> 
              <center>
                <Ons.Input modifier="underbar" 
                  placeholder="ตรวจเพาะเชื้อ" 
                  float 
                  onChange={evt => this.setState({ microbiological_culture: evt.target.value })} >     
                </Ons.Input>
                </center>
              </p>
              
                
               </center>
              
              <Ons.List>
                <Ons.ListHeader> การวินิจฉัยทางรังสีวิทยา  (Radiological diagnosis) </Ons.ListHeader>
              </Ons.List>
                 
                 <p> 
              <center>
                <Ons.Input modifier="underbar" 
                  placeholder="X-sray" 
                  float 
                  onChange={evt => this.setState({ x_sray: evt.target.value })} >     
                </Ons.Input>
                </center>
              </p>
              
              <p> 
              <center>
                <Ons.Input modifier="underbar" 
                  placeholder="อัลตราซาวน์" 
                  float 
                  onChange={evt => this.setState({ ultraSound: evt.target.value })} >     
                </Ons.Input>
                </center>
              </p>
              
              <p> 
              <center>
                <Ons.Input modifier="underbar" 
                  placeholder="X-sray คอมพิวเตอร์ (MRI)" 
                  float 
                  onChange={evt => this.setState({ mri: evt.target.value })} >     
                </Ons.Input>
                </center>
              </p>
                <Ons.List>
              <Ons.ListHeader> การวินิจฉัยทางพยาธิวิทยา (Pathological diagnosis)  </Ons.ListHeader>
            </Ons.List>
                 
                  <p> 
              <center>
                <Ons.Input modifier="underbar" 
                  placeholder="การตัดชิ้นเนื้อไปตรวจ" 
                  float 
                  onChange={evt => this.setState({ biopsy: evt.target.value })} >     
                </Ons.Input>
                </center>
              </p>
               <p> 
              <center>
                <Ons.Input modifier="underbar" 
                  placeholder="การตรวจศพ" 
                  float 
                  onChange={evt => this.setState({ autopsy: evt.target.value })} >     
                </Ons.Input>
                </center>
              </p>
              
            </section> 
            
            <Ons.ListHeader></Ons.ListHeader>
            <center>
           <h4><ons-icon  size="25px"  icon="ion-person"></ons-icon >&nbsp;&nbsp;คนไข้</h4>
           {data.firstName}&nbsp;&nbsp;&nbsp;{data.patientLastName}
  
                <h4><ons-icon size="25px"  icon="ion-person"></ons-icon>&nbsp;&nbsp;แพทย์</h4>
                {nfemp}&nbsp;&nbsp;&nbsp;{nlemp}
  
                </center>
  
                <p>
            <center>
           <Ons.Button onClick={this.showDialog.bind(this)}>
                บันทึก
              </Ons.Button>&nbsp; <Ons.Button onClick={this.handlePushSearchP.bind(this)}>กลับสู่หน้า ค้นหาไอดี</Ons.Button>
               </center>
               </p>
  
              
            {/*/<center>
            <Ons.Button onClick={this.handleClick(
           pid,lid,this.state.blood,this.state.urin,this.state.spinal_cord,
            this.state.infection,this.state.microbiological_culture,this.state.x_sray,this.state.ultraSound,this.state.mri,
            this.state.biopsy,this.state.autopsy,this.state.d_patient,this.state.d_doctor
            )}>
            <Ons.Icon icon='ion-android-clipboard' /> บันทึก </Ons.Button>  
               </center>            
                  &nbsp;&nbsp;&nbsp;
          <Ons.Button onClick={this.handlePushManager.bind(this)}>กลับสู่หน้า รายชื่อ</Ons.Button>*/}
          <Ons.Dialog
                isOpen={this.state.dialogShown}
              >
              <div style={{textAlign: 'center', margin: '20px'}}>
          <p style={{opacity: 0.5}}>บันทึก</p>
                <p> 
                   
            <center>
   
       
              <Ons.Button onClick={this.handleClick(
                  pid,lid,this.state.blood,this.state.urin,this.state.spinal_cord,
                  this.state.infection,this.state.microbiological_culture,this.state.x_sray,this.state.ultraSound,this.state.mri,
                  this.state.biopsy,this.state.autopsy,this.state.d_patient,this.state.d_doctor
                  )}>
                  <Ons.Icon icon='ion-android-clipboard' /> Save </Ons.Button>  
                  
                  
                
                  &nbsp;&nbsp;&nbsp;
                  <Ons.Button onClick={this.handlePushManager.bind(this)}>กลับสู่หน้า รายชื่อ</Ons.Button>  
                 
                  </center>  
             </p>       
               
            </div>    
          
                </Ons.Dialog>*
          </Ons.Page>        
        );
      }
  }
  
  
  
  
  // ----------------------------------------------- PrintFollow
  
  class PrintFollowP extends React.Component {
    constructor(props) {
      super(props);
      this.state = {followPs: []};
      
  
    }
    renderToolbar() {
      return (
        <Ons.Toolbar>
          {/*<div className='left'><Ons.BackButton>Back</Ons.BackButton></div>*/}
          <div className='center'>ผลวินิจฉัย โรค ทั้งหมด</div>
          <div className="right" paddingRight="20px" paddingLeft="20px"></div>
        </Ons.Toolbar>
      );
    }
    componentDidMount() {
      client({method: 'GET', path: '/api/followPs'}).done(response => {
          this.setState({followPs: response.entity._embedded.followPs});
      });
    }
    showMenu() {
      this.props.showMenu();
    }
  
    resetPage(){
      //this.props.navigator.resetPage({component : ManageDiagnose, key : ManageDiagnose})
      ReactDOM.render(<Menu />, document.getElementById('react'));
    }
  
    print() {
      window.print();
    }
  
    handlePushMenu(){  
      //this.props.navigator.resetPage({component: ManageDiagnose,key: 'ManageDiagnose',},{ animation: 'fade' });    
      ReactDOM.render(<Menu />, document.getElementById('react'));  
    }
  
    renderRow(row, index) {
      return(
        <center>
        <Ons.ListItem style={{textAlign:'center'}}
            key={row._links.self.href}
            data={row}
           
            >
            <center>
              <center>
                <td  style={{width:'40px'}}>
                <center>{index+1}</center>     
                </td><td style={{width:'100px'}}>
                <center>{row.sad}</center> 
                </td><td style={{width:'100px'}}>
                <center>{row.worry}</center> 
                </td><td style={{width:'100px'}}>
                <center>{row.happy}</center> 
                </td><td style={{width:'70px'}}>
                <center>{row.pain}</center> 
                </td><td style={{width:'70px'}}>
                <center>{row.tried}</center> 
                </td><td style={{width:'40px'}}>
                <center> {row.squeamish}</center> 
                </td><td style={{width:'100px'}}>
                <center> {row.sleepy}</center> 
                </td><td style={{width:'80px'}}>
                <center>{row.anorexia}</center> 
                </td><td style={{width:'120px'}}>
                <center>{row.tried2}</center> 
                </td><td style={{width:'80px'}}>
                <center>{row.details} </center> 
                </td><td style={{width:'140px'}}>
               <center>{row.f_patient}</center> 
               </td><td style={{width:'140px'}}>
               <center> {row.f_nurse}</center> 
                </td> <td style={{width:'140px'}}>
                       {new Date(row.datetime).getDate()}/
                      {new Date(row.datetime).getMonth()+1}/
                      {new Date(row.datetime).getFullYear()}&nbsp;
                      {new Date(row.datetime).getHours()}:
                      {new Date(row.datetime).getMinutes()}
                      </td>
          
             </center>  
            </center>
        </Ons.ListItem>
        </center>
  
  
      )
    }
    render() {
      return (
        <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
           &nbsp;
           <center>
           <center>
           <Ons.List>
              <Ons.ListHeader>&nbsp;</Ons.ListHeader>
            </Ons.List>
           <Ons.Card style={{width:'97%'}}>
           
                <td style={{width:'40px'}}>
                <center>ลำดับที่</center>
                </td><td style={{width:'100px'}}>
                <center>อาการซึมเศร้า</center>
                </td><td style={{width:'100px'}}>
                <center>อาการวิตกกังวล</center>
                </td><td style={{width:'100px'}}>
                <center>ภาวะความสุขกายและใจ</center>
                </td><td style={{width:'70px'}}>
                <center> อาการเหนื่อยหอบ</center>
                </td><td style={{width:'70px'}}>
                <center>อาการปวด</center>
                </td><td style={{width:'40px'}}>
                <center> อาการเหนื่อย/อ่อนล้า</center>
                </td><td style={{width:'100px'}}>
                <center> อาการคลื่นไส้</center>
                </td><td style={{width:'80px'}}>
                <center>อาการง่วงซึม/สลึมสลือ</center>
                </td><td style={{width:'120px'}}>
                <center>เบื่ออาหาร</center>
                </td><td style={{width:'80px'}}>
                <center>เพิ่มเติม</center></td>          
                <td style={{width:'140px'}}>
                <center>คนไข้</center>
                </td><td style={{width:'140px'}}>
                <center> พยาบาลผู้ประเมิณ</center>
                </td><td style={{width:'140px'}}>   
                <center> เวลาบันทึกข้อมูล</center>
                </td>         
          </Ons.Card>                
          </center>
          <Ons.List>
              <Ons.ListHeader>&nbsp;</Ons.ListHeader>
            </Ons.List>
            </center>
          <center>
          <Ons.Card>
          <Ons.List style={{textAlign:'center'}}
          dataSource={this.state.followPs}
          renderRow={this.renderRow}       
          />
          </Ons.Card>
          </center>
          &nbsp;&nbsp;&nbsp;   
  
          <div style={{ textAlign: 'center', paddingTop:'15px', paddingBottom:'10px', paddingLeft:'20%', paddingRight:'20%'}}> 
            <Ons.Button 
                onClick={this.print.bind(this)}> 
              <Ons.Icon icon='ion-printer' />&nbsp;
              "พิมพ์" ใบผลวินิจฉัย
            </Ons.Button>    
          </div>
          <center>
          <Ons.Button onClick={this.handlePushMenu.bind(this)}>กลับสู่หน้า รายชื่อ</Ons.Button>
          </center>
        </Ons.Page>
        
        
      );
    }
  }
  
  class SearchFollowP extends React.Component {
      
          constructor(props) {
              super(props);
      
              this.state = {
                  title: props.title ? props.title : 'Custom Page',
                  nextTitle: null
         
              }
          }
      
          push() {
      
              fetch('http://localhost:8080/api/patientSaves/search/findByPid?'+
                  'Pid=' + this.state.pid )
      
                  .then((response)=> response.json())
                  .then((responseJson) => {
      
                      data = responseJson;
                      console.log('data =>' + data);
      
              pid = this.state.pid;
            
             ReactDOM.render(<FollowP />, document.getElementById('react'));
                      /*this.props.navigator.pushPage({ component: FollowP,
                      props: { key: 'FollowP'} });*/
      
                  })
                  .catch((error) => {
                      ons.notification.alert('ไม่พบไอดีคนไข้');
                      console.log('data not found !!!')
                  });
      
      
          }
  
          handleMenu(){  
              //this.props.navigator.resetPage({component: ManageDiagnose,key: 'ManageDiagnose',},{ animation: 'fade' });    
              ReactDOM.render(<Menu />, document.getElementById('react'));  
            }
      
      
             renderToolbar() {
              return (
                    <Ons.Toolbar>
                  
                       <div className='center'>ระบบติดตามอาการผู้ป่วย</div>
      
                    </Ons.Toolbar>
              );
          }
      
          render() {
              return (
                  <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                        <center>
                   <Ons.Card style={{width:'20%'}}>
                  <div style={{ textAlign: 'center' }}>
        
                  <h1>ผู้ป่วย</h1>
                  <br/>
                  <h4>ค้นหาชื่อ-สกุลด้วย ไอดีคนไข้</h4>
                  <p>
                  <br/>
                  
                      <Ons.Input
                          value={this.state.pid}
                          onChange={evt => this.setState({pid: evt.target.value})}
                          modifier='underbar'
                          float
                          placeholder='ไอดีคนไข้' />
                  </p>
                  <br/>
                  </div>
                </Ons.Card>
                            </center>
                <center>
                <br/>
                  <Ons.Button onClick={this.push.bind(this)}>Search</Ons.Button>
                  <br/><br/>
              <Ons.Button onClick={this.handleMenu.bind(this)}>กลับสู่หน้า Menu</Ons.Button> 
                </center>
                  <br/><br/><br/>
                  <section style={{textAlign: 'center'}}>
                      <img src={"https://f.ptcdn.info/498/026/000/1418462406-B0kyJLeCEA-o.jpg"} alt="Onsen UI" style={{ width: '20%' }} />
                  </section>
          
           
            </Ons.Page>
          );
      }
      
  }
  
  /*class SearchFollowR extends React.Component {
      
          constructor(props) {
              super(props);
      
              this.state = {
                  title: props.title ? props.title : 'Custom Page',
                  nextTitle: null
         
              }
          }
      
          push() {
      
              fetch('http://localhost:8080/api/saveRooms/search/findByPid?'+
                  'Pid=' + this.state.pid )
      
                  .then((response)=> response.json())
                  .then((responseJson) => {
      
                      data = responseJson;
                      console.log('data =>' + data);
      
              pid = this.state.pid;
           
      
                      this.props.navigator.pushPage({ component: FollowP,
                      props: { key: 'FollowP'} });
      
                  })
                  .catch((error) => {
                      ons.notification.alert('ไม่พบไอดีคนไข้');
                      console.log('data not found !!!')
                  });
      
      
          }
      
      
             renderToolbar() {
              return (
                    <Ons.Toolbar>
                       
                       <div className='center'>ระบบติดตามอาการผู้ป่วย</div>
      
                    </Ons.Toolbar>
              );
          }
      
          render() {
              return (
                  <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                        <center>
                   <Ons.Card style={{width:'20%'}}>
                  <div style={{ textAlign: 'center' }}>
        
                  <h1>ผู้ป่วย</h1>
                  <br/>
                  <h4>ค้นหา ไอดีห้องพักคนไข้ ด้วยไอดี</h4>
                  <p>
                  <br/>
                  
                      <Ons.Input
                          value={this.state.pid}
                          onChange={evt => this.setState({pid: evt.target.value})}
                          modifier='underbar'
                          float
                          placeholder='ไอดีผู้ป่วย' />
                  </p>
                  <br/>
                  </div>
                </Ons.Card>
                            </center>
                <center>
                <br/>
                  <Ons.Button onClick={this.push.bind(this)}>Search</Ons.Button>
                  &nbsp;&nbsp;<Ons.Button onClick={this.handleMenu.bind(this)}>กลับสู่หน้า ค้นหาชื่อ-สกุล</Ons.Button> 
                </center>
                  <br/><br/><br/>
                  <section style={{textAlign: 'center'}}>
                      <img src={"http://digitaloffice.thailife.com/assets/products/57180081-1482340579.jpg"} alt="Onsen UI" style={{ width: '20%' }} />
                  </section>
          
           
            </Ons.Page>
          );
      }
      
  }*/
  
  class FollowP extends React.Component {
      constructor(props) {
        super(props);
        this.state = {patientSaves: []};
        this.handleClick = this.handleClick.bind(this);
        isOpen: false;
       // this.handleSelectPa = this.handleSelectedPa.bind(this);
        this.state = {
        //  date: new Date(),
        sad:null,
        worry:null,
        happy:null,
        pain:null,
        tried:null,
        squeamish:null,
        sleepy:null,
        anorexia:null,
        tried2:null,
        details:' ',
       
  
       f_patient: data.firstName+' '+data.patientLastName,
       f_nurse: nfemp+ nlemp
          
          
          
        }
      }
    
      
      showDialog() {
        if(this.state.sad == null || this.state.worry == null ||
          this.state.happy == null||
          this.state.pain == null || this.state.tried == null || this.state.squeamish == null ||
          this.state.sleepy == null || this.state.anorexia == null || this.state.tried2 == null  ||this.state.f_patient == null ||this.state.f_nurse == null 
        ){
          ons.notification.alert('กรุณากรอกข้อมูลให้ครบ!')
        }else{
          this.setState({dialogShown: true});
        }
      }  
    
        renderToolbar() {
          return (
            <Ons.Toolbar>
            <div className='center'>  <Ons.Icon icon='md-account' /> ระบบติดตามอาการผู้ป่วย
            </div>
            </Ons.Toolbar>
          );
        }
    
        handledetailsChange(e) {
          this.setState({ details: e.target.value });
        }
        componentDidMount() {
          client({method: 'GET', path: '/api/patientSaves'}).done(response => {
            this.setState({patientSaves: response.entity._embedded.patientSaves});
          });
        }

        handletype_room(e) {
            this.setState({ type_room: e.target.value });
        }
    
  
        handlePushPrintFollowP(){  
          ReactDOM.render(<PrintFollowP />, document.getElementById('react'));  
      }
        
       handlePushMenu(){  
          ReactDOM.render(<Menu />, document.getElementById('react'));  
      }
          /*this.props.navigator.resetPage({component: Menu,key: 'Menu',},{ animation: 'fade' });      
        }*/
      
        handlePushSearchFollowP(){  
          //this.props.navigator.resetPage({component: ManageDiagnose,key: 'ManageDiagnose',},{ animation: 'fade' });    
          ReactDOM.render(<SearchFollowP />, document.getElementById('react'));  
        }
        handleClick(pid,lid,sad,worry,happy,pain,tried,squeamish,sleepy,anorexia,tried2,details,f_patient,f_nurse) {
          return function () { 
            client({method: 'GET', path:'/pid/'+pid+'/lid/'+lid+'/sad/'+sad+'/worry/'+worry+'/happy/'+happy+'/pain/'+pain+'/tried/'+tried+'/squeamish/'+squeamish+'/sleepy/'+sleepy+
                                                '/anorexia/'+anorexia+'/tried2/'+tried2+'/details/'+details+'/f_patient/'+f_patient+'/f_nurse/'+f_nurse}).done(ons.notification.alert("บันทึกสำเร็จ"));
            
          }
     
      }
    
    
    
    
      
        render() {
          return (
            <Ons.Page renderToolbar={this.renderToolbar}>
            
              <section style={{textAlign: 'center'}}>
              <Ons.List>
                <Ons.ListHeader><h7>โดยใช้ **แบบประเมิน Edmonton Symptom Assessment System (ESAS)**<br/>**คำอธิบาย** : แบบประเมิณจะประเมิณด้วยตัวเลข 0-10 เช่น 0 : ไม่มีอาการ ,5-6 อาการค่อยข้างน่าเป็นห่วง , 9-10 : อาการหนัก ต้องรีบได้รับการรักษา เป็นต้น </h7> </Ons.ListHeader>
              </Ons.List>
             <p><b>
                Date : &nbsp;&nbsp;&nbsp;{datetime}</b></p>	
           <Ons.ListHeader> **แบบประเมิณด่านล่างผู้ป่วยต้องประเมิณด้วยตนเองเท่านั้น** </Ons.ListHeader>
           
    
                <center> 	
                        
                    <p> 
                    <center>
                    <td style={{width:'120px'}}><b>อาการซึมเศร้า : </b></td>
                   
                    <td style={{width:'110px'}}>
                  <Ons.Select id="choose-sel"
                   value={this.state.position} 
                   modifier={this.state.position} 
                   onChange={evt => this.setState({sad: event.target.value})} > 
                   <option >โปรดเลือก..</option>
                     <option value="ไม่มีอาการ">0</option>
                     <option value="บางครั้ง">1</option>
                     <option value="บางครั้ง">2</option>
                     <option value="บ่อย">3</option>
                     <option value="บ่อย">4</option>
                     <option value="ค่อนข้างน่าเป็นห่วง">5</option>
                     <option value="ค่อนข้างน่าเป็นห่วง">6</option>
                     <option value="แย่">7</option>
                     <option value="แย่">8</option>
                     <option value="รีบรับการรักษา">9</option>
                     <option value="รีบรับการรักษา">10</option>
                   </Ons.Select></td>
                  
                   
                  <td style={{width:'110px'}}><b>อาการวิตกกังวล : </b>
                   
                  </td><td style={{width:'110px'}}>
                  <Ons.Select id="choose-sel"
                   value={this.state.position} 
                   modifier={this.state.position} 
                   onChange={evt => this.setState({worry: event.target.value})} > 
                 <option >โปรดเลือก..</option>
                     <option value="ไม่มีอาการ">0</option>
                     <option value="บางครั้ง">1</option>
                     <option value="บางครั้ง">2</option>
                     <option value="บ่อย">3</option>
                     <option value="บ่อย">4</option>
                     <option value="ค่อนข้างน่าเป็นห่วง">5</option>
                     <option value="ค่อนข้างน่าเป็นห่วง">6</option>
                     <option value="แย่">7</option>
                     <option value="แย่">8</option>
                     <option value="รีบรับการรักษา">9</option>
                     <option value="รีบรับการรักษา">10</option>
                     </Ons.Select></td>
                  
                     <td style={{width:'110px'}}><b>ภาวะความสุขกายและใจ : </b>
                   
                     </td><td style={{width:'110px'}}>
                  <Ons.Select id="choose-sel"
                   value={this.state.position} 
                   modifier={this.state.position} 
                   onChange={evt => this.setState({happy: event.target.value})} > 
                   <option >โปรดเลือก..</option>
                     <option value="ไม่มีอาการ">0</option>
                     <option value="บางครั้ง">1</option>
                     <option value="บางครั้ง">2</option>
                     <option value="บ่อย">3</option>
                     <option value="บ่อย">4</option>
                     <option value="ค่อนข้างน่าเป็นห่วง">5</option>
                     <option value="ค่อนข้างน่าเป็นห่วง">6</option>
                     <option value="แย่">7</option>
                     <option value="แย่">8</option>
                     <option value="รีบรับการรักษา">9</option>
                     <option value="รีบรับการรักษา">10</option>
                    
                   </Ons.Select>
                   </td>
                   
                   <td style={{width:'110px'}}><b>อาการเหนื่อยหอบ : </b>
                   
                   </td><td style={{width:'110px'}}>
                  <Ons.Select id="choose-sel"
                   value={this.state.position} 
                   modifier={this.state.position} 
                   onChange={evt => this.setState({pain: event.target.value})} > 
                  <option >โปรดเลือก..</option>
                     <option value="ไม่มีอาการ">0</option>
                     <option value="บางครั้ง">1</option>
                     <option value="บางครั้ง">2</option>
                     <option value="บ่อย">3</option>
                     <option value="บ่อย">4</option>
                     <option value="ค่อนข้างน่าเป็นห่วง">5</option>
                     <option value="ค่อนข้างน่าเป็นห่วง">6</option>
                     <option value="แย่">7</option>
                     <option value="แย่">8</option>
                     <option value="รีบรับการรักษา">9</option>
                     <option value="รีบรับการรักษา">10</option>
                    
                   </Ons.Select>
                   </td>
                   
                   
                   
                    </center>       
                   </p>
              </center>
                
                <Ons.List>
                  <Ons.ListHeader> แบบประเมิณด่านล่างผู้ดูแลหรือผู้ป่วยสามารถประเมิณได้ </Ons.ListHeader>
                </Ons.List>
                <p>
               <center>
              <td style={{width:'110px'}}><b>อาการปวด: </b>
  
                   </td><td style={{width:'120px'}}>
                  <Ons.Select id="choose-sel"
                   value={this.state.position} 
                   modifier={this.state.position} 
                   onChange={evt => this.setState({tried: event.target.value})} > 
                     <option >โปรดเลือก..</option>
                     <option value="ไม่มีอาการ">0</option>
                     <option value="บางครั้ง">1</option>
                     <option value="บางครั้ง">2</option>
                     <option value="บ่อย">3</option>
                     <option value="บ่อย">4</option>
                     <option value="ค่อนข้างน่าเป็นห่วง">5</option>
                     <option value="ค่อนข้างน่าเป็นห่วง">6</option>
                     <option value="แย่">7</option>
                     <option value="แย่">8</option>
                     <option value="รีบรับการรักษา">9</option>
                     <option value="รีบรับการรักษา">10</option>
                    
                   </Ons.Select>
                  </td>
                   
                <td style={{width:'110px'}}><b>อาการเหนื่อย/อ่อนล้า : </b>
                   
                </td><td style={{width:'110px'}}>
                  <Ons.Select id="choose-sel"
                   value={this.state.position} 
                   modifier={this.state.position} 
                   onChange={evt => this.setState({squeamish: event.target.value})} > 
                 <option >โปรดเลือก..</option>
                     <option value="ไม่มีอาการ">0</option>
                     <option value="บางครั้ง">1</option>
                     <option value="บางครั้ง">2</option>
                     <option value="บ่อย">3</option>
                     <option value="บ่อย">4</option>
                     <option value="ค่อนข้างน่าเป็นห่วง">5</option>
                     <option value="ค่อนข้างน่าเป็นห่วง">6</option>
                     <option value="แย่">7</option>
                     <option value="แย่">8</option>
                     <option value="รีบรับการรักษา">9</option>
                     <option value="รีบรับการรักษา">10</option>
                   </Ons.Select>
                   </td>
                   
                   <td style={{width:'110px'}}><b>อาการคลื่นไส้ : </b>
  
                   </td><td style={{width:'110px'}}>
                  <Ons.Select id="choose-sel"
                   value={this.state.position} 
                   modifier={this.state.position} 
                   onChange={evt => this.setState({sleepy: event.target.value})} > 
                 <option >โปรดเลือก..</option>
                     <option value="ไม่มีอาการ">0</option>
                     <option value="บางครั้ง">1</option>
                     <option value="บางครั้ง">2</option>
                     <option value="บ่อย">3</option>
                     <option value="บ่อย">4</option>
                     <option value="ค่อนข้างน่าเป็นห่วง">5</option>
                     <option value="ค่อนข้างน่าเป็นห่วง">6</option>
                     <option value="แย่">7</option>
                     <option value="แย่">8</option>
                     <option value="รีบรับการรักษา">9</option>
                     <option value="รีบรับการรักษา">10</option>
                   </Ons.Select>
                   </td>
                   
                   <td style={{width:'110px'}}><b>อาการง่วงซึม/สลึมสลือ : </b>
                   
                   </td><td style={{width:'110px'}}>
                  <Ons.Select id="choose-sel"
                   value={this.state.position} 
                   modifier={this.state.position} 
                   onChange={evt => this.setState({anorexia: event.target.value})} > 
                 <option >โปรดเลือก..</option>
                     <option value="ไม่มีอาการ">0</option>
                     <option value="บางครั้ง">1</option>
                     <option value="บางครั้ง">2</option>
                     <option value="บ่อย">3</option>
                     <option value="บ่อย">4</option>
                     <option value="ค่อนข้างน่าเป็นห่วง">5</option>
                     <option value="ค่อนข้างน่าเป็นห่วง">6</option>
                     <option value="แย่">7</option>
                     <option value="แย่">8</option>
                     <option value="รีบรับการรักษา">9</option>
                     <option value="รีบรับการรักษา">10</option>
                   </Ons.Select>
                   </td>
                   
                   <td style={{width:'110px'}}><b>เบื่ออาหาร : </b>
  
                   </td><td style={{width:'110px'}}>
                  <Ons.Select id="choose-sel"
                   value={this.state.position} 
                   modifier={this.state.position} 
                   onChange={evt => this.setState({tried2: event.target.value})} > 
                     <option >โปรดเลือก..</option>
                     <option value="ไม่มีอาการ">0</option>
                     <option value="บางครั้ง">1</option>
                     <option value="บางครั้ง">2</option>
                     <option value="บ่อย">3</option>
                     <option value="บ่อย">4</option>
                     <option value="ค่อนข้างน่าเป็นห่วง">5</option>
                     <option value="ค่อนข้างน่าเป็นห่วง">6</option>
                     <option value="แย่">7</option>
                     <option value="แย่">8</option>
                     <option value="รีบรับการรักษา">9</option>
                     <option value="รีบรับการรักษา">10</option>
                   </Ons.Select>
                  </td>
               </center>
               </p>
  
  
  
           <div style={{ textAlign: 'center',paddingTop:'10px', paddingBottom:'10px' }}>
                        <center>
                            <Ons.List style={{width: '600px'}}>
                        <Ons.ListItem>&nbsp;
                            รายละเอียดเพิ่มเติม &nbsp;&nbsp;: &nbsp;&nbsp;
                            <p>
                                <textarea
                                    rows = "4" cols = "50"
                                    value={this.state.details}
                                    onChange={this.handledetailsChange.bind(this)} 
                                >
                                </textarea>
                            </p>
          
                        </Ons.ListItem>
                            </Ons.List>
                        </center>
                    </div>
          
          
              <Ons.ListHeader></Ons.ListHeader>
                <center>
                
               <Ons.Card style={{width:'25%'}}>
              <center>
             <h4><ons-icon  size="25px"  icon="ion-person"></ons-icon >&nbsp;&nbsp;คนไข้</h4>
             {data.firstName}&nbsp;&nbsp;&nbsp;{data.patientLastName}
             
            {/* <h4><ons-icon  size="25px"  icon="ion-person"></ons-icon >&nbsp;&nbsp;ห้อง</h4>
            {data.type_room}*/}
    
                  <h4><ons-icon size="25px"  icon="ion-person"></ons-icon>&nbsp;&nbsp;พยาบาล </h4>
                  {nfemp}&nbsp;&nbsp;&nbsp;{nlemp}
    
                  </center>
                 </Ons.Card>
                 
                   </center>
        
                  <p>
              <center>
             <Ons.Button onClick={this.showDialog.bind(this)}>
                  บันทึก
                </Ons.Button>&nbsp;&nbsp;
                <Ons.Button onClick={this.handlePushSearchFollowP.bind(this)}>
                  กลับสู่หน้า ค้นหาไอดี
                </Ons.Button>
                 </center>
                 </p>
    
                
              {/*/<center>
              <Ons.Button onClick={this.handleClick(
             pid,lid,this.state.blood,this.state.urin,this.state.spinal_cord,
              this.state.infection,this.state.microbiological_culture,this.state.x_sray,this.state.ultraSound,this.state.mri,
              this.state.biopsy,this.state.autopsy,this.state.d_patient,this.state.d_doctor
              )}>
              <Ons.Icon icon='ion-android-clipboard' /> บันทึก </Ons.Button>  
                 </center>            
                    &nbsp;&nbsp;&nbsp;
            <Ons.Button onClick={this.handlePushManager.bind(this)}>กลับสู่หน้า รายชื่อ</Ons.Button>*/}
            <Ons.Dialog
                  isOpen={this.state.dialogShown}
                >
                <div style={{textAlign: 'center', margin: '20px'}}>
            <p style={{opacity: 0.5}}>บันทึก</p>
                  <p>
                     
              <center>
     
         
                <Ons.Button onClick={this.handleClick(
                    pid,lid,this.state.sad,this.state.worry,this.state.happy,
                    this.state.pain,this.state.tried,this.state.squeamish,this.state.sleepy,this.state.anorexia,
                    this.state.tried2,this.state.details,this.state.f_patient,this.state.f_nurse
                    )}>
                    <Ons.Icon icon='ion-android-clipboard' /> Save </Ons.Button> 
                    &nbsp;&nbsp;&nbsp;
  
                      
                    <Ons.Button onClick={this.handlePushPrintFollowP.bind(this)}>Print</Ons.Button> 
                  
                    &nbsp;&nbsp;&nbsp;
                    <Ons.Button onClick={this.handlePushMenu.bind(this)}>กลับสู่หน้า Menu</Ons.Button>  
  
                   
                    </center>  
               </p>       
                 
              </div>    
            
                  </Ons.Dialog>
                  </section>
            </Ons.Page>        
          );
        }
    }
    
    class PrintDiagnose extends React.Component {
      constructor(props) {
        super(props);
        this.state = {diagnoses: []}
        this.state = {
          //  date: new Date(),
            blood:'',
            urin:'',
            spinal_cord:'',
            infection:'',
            microbiological_culture:'',
            x_sray:'',
            ultraSound:'',
            mri:'',
            biopsy:'',
            autopsy:'',
            d_patient: data.firstName+data.patientLastName,
            d_doctor: nfemp+nlemp
            
        
    
      }
  };
  
  handlePushManager(){  
      //this.props.navigator.resetPage({component: ManageDiagnose,key: 'ManageDiagnose',},{ animation: 'fade' });    
      ReactDOM.render(<SearchPrintDiagnose />, document.getElementById('react'));  
    }
      renderToolbar() {
        return (
          <Ons.Toolbar>
            <div className='center'> ระบบวินิจฉัย </div>
            <div className="right" paddingRight="20px" paddingLeft="20px"></div>
          </Ons.Toolbar>
        );
      }
      componentDidMount() {
        client({method: 'GET', path: '/api/diagnoses'}).done(response => {
            this.setState({diagnoses: response.entity._embedded.diagnoses});
        });
      }
      showMenu() {
        this.props.showMenu();
      }
      handled_patient(e) {
          this.setState({d_patient: e.target.value});
      }
  
      handleblood(e) {
          this.setState({blood: e.target.value});
      }
  
      handleurin(e) {
          this.setState({urin: e.target.value});
      }
  
      handlespinal_cord(e) {
          this.setState({spinal_cord: e.target.value});
      }
  
      handleinfection(e) {
          this.setState({infection: e.target.value});
      }
  
      handlemicrobiological_culture(e) {
          this.setState({microbiological_culture: e.target.value});
      }
  
      handlex_sray(e) {
          this.setState({x_sray: e.target.value});
      }
  
      handleultraSound(e) {
          this.setState({ultraSound: e.target.value});
      }
  
      handlemri(e) {
          this.setState({mri: e.target.value});
      }
  
      handlebiopsy(e) {
          this.setState({biopsy: e.target.value});
      }
  
      handleautopsy(e) {
          this.setState({autopsy: e.target.value});
      }
    
   
     /* resetPage(){
        this.props.navigator.resetPage({component : ManageDiagnose, key : ManageDiagnose})
      }*/
    
      print() {
        window.print();
      }
    
      
      render() {
        return (
          <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
             &nbsp;
             <center>
             <center>
             <Ons.List>
                <Ons.ListHeader>&nbsp;</Ons.ListHeader>
              </Ons.List>
             <Ons.Card style={{width:'39%'}}>
            <div style={{ textAlign: 'center', paddingTop:'10px', paddingBottom:'10px'}}>
                            <center>
                            <h4><ons-icon size="25px"  icon="ion-clipboard"></ons-icon>&nbsp;&nbsp;ผลวินินิจฉัย</h4>
                              <Ons.ListHeader> การวินิจฉัยทางห้องปฎิบัติการวิทยา (Laboratory diagnosis) </Ons.ListHeader>
                              <Ons.List style={{width: '600px'}}>
                                <Ons.ListItem >
                          
                          
                                    <b>ตรวจเลือด</b>&nbsp;&nbsp;: &nbsp; {data.blood} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                               
                                   &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;
                                                                                                                <p>
                                   <b>ตรวจปัสสาวะ</b> &nbsp;&nbsp;:&nbsp;&nbsp; {data.urin}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                                                                                                </p>
                 
                                  <b>ตรวจน้ำไขสันหลัง</b>&nbsp;&nbsp;: &nbsp;&nbsp;{data.spinal_cord}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; 
                                                                                                                <p>
                               <b> ตรวจเชื้อ</b> &nbsp;&nbsp;:&nbsp;&nbsp; {data.infection}
                                                                                                                </p>
                        &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
                          &nbsp;&nbsp;&nbsp; &nbsp;   
                          <b>ตรวจเพาะเชื้อ</b>&nbsp;&nbsp;:{data.microbiological_culture}
                        
                                </Ons.ListItem>
                                 </Ons.List>
                                 </center>
                                 <center>
                                 
                            <Ons.ListHeader>การวินิจฉัยทางรังสีวิทยา  (Radiological diagnosis) </Ons.ListHeader>
                              <Ons.List style={{width: '600px'}}>
                                <Ons.ListItem >
                              
                                <b>X-sray</b> &nbsp;&nbsp;: &nbsp;&nbsp;{data.x_sray}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                                &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; 
                                                                                                                <p>
                               <b> UltraSound</b>  &nbsp;&nbsp;:&nbsp;&nbsp; {data.ultraSound}
                                                                                                                </p>
                        &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
                       
                        <b> X-sray Computer[MRI]</b>&nbsp;&nbsp;:{data.mri}
                        
                                </Ons.ListItem>
                                 </Ons.List>
                                 </center>
                                 
                                  <center>
                            <Ons.ListHeader> การวินิจฉัยทางพยาธิวิทยา (Pathological diagnosis) </Ons.ListHeader>
                              <Ons.List style={{width: '600px'}}>
                                <Ons.ListItem >
                                <b> การตัดชิ้นเนื้อไปตรวจ</b> &nbsp;&nbsp;: &nbsp;&nbsp;{data.biopsy}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              
                      <p>
                            <b>ตรวจศพ</b> &nbsp;&nbsp;:&nbsp;&nbsp; {data.autopsy}
                       </p>
  
                                </Ons.ListItem>
                                                       <Ons.ListItem >
                              <ons-icon size="25px"  icon="ion-person"> </ons-icon> &nbsp;<b>คนไข้</b> &nbsp;&nbsp;: &nbsp;&nbsp;{}&nbsp;{data.d_patient}&nbsp;{}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       
                                &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; 
                                                                                                                <p>
                  <ons-icon size="25px"  icon="ion-person">	</ons-icon>	&nbsp;<b>	แพทย์</b> &nbsp;&nbsp;:&nbsp;&nbsp; {nfemp}&nbsp;&nbsp; {nlemp}
                                                                                                                </p>
                                </Ons.ListItem>
                                 </Ons.List>
                                 </center>
                                 
                                 </div>
                                 
                          
                         
           </Ons.Card>                
            </center>
            <Ons.List>
                <Ons.ListHeader>&nbsp;</Ons.ListHeader>
              </Ons.List>
              </center>
            <center>
            <Ons.Card>
            <Ons.List style={{textAlign:'center'}}
            dataSource={this.state.diagnoses}
        
            />
            </Ons.Card>
            </center>
            &nbsp;&nbsp;&nbsp;   
    
            <div style={{ textAlign: 'center', paddingTop:'15px', paddingBottom:'10px', paddingLeft:'20%', paddingRight:'20%'}}> 
              <Ons.Button 
                  onClick={this.print.bind(this)}> 
                <Ons.Icon icon='ion-printer' />&nbsp;
                พิมพ์ ใบผลวินิจฉัย</Ons.Button> 
                &nbsp;&nbsp;
                <Ons.Button onClick={this.handlePushManager.bind(this)}>กลับสู่หน้า ค้นหาไอดี</Ons.Button>
                 
            </div>
          </Ons.Page>
          
        );
      }
    }
  
    class SearchPrintDiagnose extends React.Component {
      
          constructor(props) {
              super(props);
      
              this.state = {
                  title: props.title ? props.title : 'Custom Page',
                  nextTitle: null
      
              }
          }
      
          push() {
      
              fetch('http://localhost:8080/api/diagnoses/search/findByDid?'+
                  'Did=' + this.state.did )
      
                  .then((response)=> response.json())
                  .then((responseJson) => {
      
                      data = responseJson;
                      console.log('data =>' + data);
      
              did = this.state.did;
             
             ReactDOM.render(<PrintDiagnose />, document.getElementById('react'));
                      /*this.props.navigator.pushPage({ component: FollowP,
                      props: { key: 'FollowP'} });*/
      
                  })
                  .catch((error) => {
                      ons.notification.alert('ไม่พบไอดีใบผลวินิจฉัย');
                      console.log('data not found !!!')
                  });
      
      
          }
  
    
  
          handleMenu(){  
              //this.props.navigator.resetPage({component: ManageDiagnose,key: 'ManageDiagnose',},{ animation: 'fade' });    
              ReactDOM.render(<Menu />, document.getElementById('react'));  
            }
            handlePushManager(){  
              //this.props.navigator.resetPage({component: ManageDiagnose,key: 'ManageDiagnose',},{ animation: 'fade' });    
              ReactDOM.render(<ManageDiagnose />, document.getElementById('react'));  
            }
      
      
             renderToolbar() {
              return (
                    <Ons.Toolbar>
                  
                       <div className='center'>ระบบติดตามอาการผู้ป่วย</div>
      
                    </Ons.Toolbar>
              );
          }
      
          render() {
              return (
                  <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                        <center>
                   <Ons.Card style={{width:'20%'}}>
                  <div style={{ textAlign: 'center' }}>
        
                  <h1>พิมพ์ใบผลวินิจฉัย</h1>
                  <br/>
                  <h4>ค้นหาข้อมูลคนไข้ ด้วย ไอดีใบผลวินิจฉัย</h4>
                  <p>
                  <br/>
                  
                      <Ons.Input
                          value={this.state.did}
                          onChange={evt => this.setState({did: evt.target.value})}
                          modifier='underbar'
                          float
                          placeholder='ไอดีใบผลวินิจฉัย' />
                  </p>
                  <br/>
                  </div>
                </Ons.Card>
                            </center>
                <center>
                <br/>
                  <Ons.Button onClick={this.push.bind(this)}>Search</Ons.Button>
                  <br/> <br/>
              <Ons.Button onClick={this.handlePushManager.bind(this)}>กลับสู่หน้า รายชื่อ</Ons.Button> 
                </center>
                  <br/><br/><br/>
                  <section style={{textAlign: 'center'}}>
                      <img src={"https://f.ptcdn.info/924/046/000/ofwbvg7imm5ieHzbA91-o.png"} alt="Onsen UI" style={{ width: '20%' }} />
                  </section>
          
           
            </Ons.Page>
          );
      }
      
  }

/* = = = = = = <AppAe> = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */

class PageNav1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            res: undefined,
            patients: [],
            data: [],
            search: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }


    handleSearchChange(e) {
        this.setState({ search: e.target.value });
    }

    handleClick() {
        if (this.state.search === '') {
            ons.notification.alert('กรุณากรอก ID');
        } else {
            this.setState({ res: undefined });
            client({ method: 'GET', path: '/api/patients/' + this.state.search })
                .done(response => {
                    this.setState({ res: response, patients: [response.entity] });
                }, response => {
                    if (response.status.code === 404) {
                        ons.notification.alert('ไม่พบ ID ที่ค้นหา');
                        this.setState({ res: response });
                    } else {
                        ons.notification.alert('กรอกเป็นตัวเลข ID คะ');
                    }
                });
        }
    }

    handleViewClick(e) {
        this.pushPage(e.currentTarget.dataset.pid);
    }

    pushPage(pid) {
        this.props.navigator.pushPage({ component: PageNav2, props: { key: 'pageNav2', title: pid } });
    }

    loadData() {
        client({ method: 'GET', path: '/api/patients/' })
            .done(response => {
                this.setState({ res: response, patients: response.entity._embedded.patients });
            }, response => {
                if (response.status.code === 404) {
                    ons.notification.alert('พังแล้ว คะ');
                } else {
                    ons.notification.alert('กำลังเข้าสู่ระบบ คะ');
                }
            });
    }

    componentDidMount() {
        this.loadData()
    }

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton>หน้าแรก</Ons.BackButton></div>
                <div className='center'>ระบบนัดหมายผู้ป่วย</div>
            </Ons.Toolbar>
        );
    }



    render() {


        if (!this.state.res) {
            return (
                <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                    <section style={{ textAlign: 'center' }}>
                        <ons-progress-circular indeterminate></ons-progress-circular>
                    </section>
                </Ons.Page>
            );
        }
        if (this.state.patients.length !== 0) {
            return (
                <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                    <section style={{ textAlign: 'center' }}>



                        <img src={"http://pdr.suth.go.th/wp-content/uploads/2017/05/Capture-1-300x138.jpg"} alt="Onsen UI" style={{ width: '20%' }} />





                        <p>
                            <Ons.SearchInput
                                placeholder='กรุณากรอก ID'
                                value={this.state.search}
                                onChange={this.handleSearchChange} />
                        </p>

                        <p>
                            <Ons.Button onClick={this.handleClick}>ค้นหา</Ons.Button>
                        </p>

                        <center>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>ชื่อ</th>
                                        <th>นามสกุล</th>
                                        <th>วันเกิด</th>
                                        <th>อายุ</th>
                                        <th>กรุ๊ปเลือด</th>
                                        <th>สัญชาติ</th>
                                        <th>ข้อมูลการนัด</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {

                                        this.state.patients.map((patient) => (
                                            <tr key={patient._links.self.href.split("/").pop()}>
                                                <th>{patient._links.self.href.split("/").pop()}</th>
                                                <td>{patient.firstName}</td>
                                                <td>{patient.lastName}</td>
                                                <td>{patient.birthDay}</td>
                                                <td>{patient.age}</td>
                                                <td>{patient.bloodType}</td>
                                                <td>{patient.nationality}</td>
                                                <td><Ons.Button style={{ margin: '6px' }} modifier='quiet' data-pid={patient._links.self.href.split("/").pop()} onClick={this.handleViewClick.bind(this)}>View</Ons.Button></td>
                                            </tr>
                                        ), this)
                                    }
                                </tbody>
                            </table>
                        </center>
                    </section>
                </Ons.Page>
            );
        } else {
            return (
                <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                    <section style={{ textAlign: 'center' }}>
                        <h1>No Patient In Database!</h1>
                    </section>
                </Ons.Page>
            );
        }
    }
}

////////////////////////////////
//////////// View BaiNut
//////////////////////////////

class PageNav2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title ? props.title : '?',
            data: []
        };
    }

    loadData() {
        client({ method: 'GET', path: '/api/patients/' + this.state.title + '/pal' }).done(response => {
            this.setState({ data: response.entity._embedded.patientAppoinmentLatters.reverse() });
        });
    }

    componentDidMount() {
        this.loadData();
    }


    handleBackClick() {
        // ons.notification.confirm('ย้อนกลับหรือไม่ ?')
        //  .then((response) => {
        //    if (response === 1) {
        this.props.navigator.popPage();
        // }
        // });
    }

    handleNewClick() {
        this.props.navigator.pushPage({ component: PageNav3, props: { key: 'pageNav3', title: this.state.title, onUnmount: () => this.loadData() } });
    }


    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton onClick={this.handleBackClick.bind(this)}>ย้อนกลับ</Ons.BackButton></div>
                <div className='center'>{"หมายเลข ID " + this.state.title}</div>
                <div className='right'>
                    <Ons.ToolbarButton>
                        <Ons.Icon onClick={this.handleNewClick.bind(this)} icon="md-plus"></Ons.Icon>
                    </Ons.ToolbarButton>
                </div>
            </Ons.Toolbar>
        );
    }

    render() {
        if (this.state.data.length === 0) {
            return (<Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                <section style={{ textAlign: 'center' }}>
                    <p>
                        ยังไม่มีการนัดหมาย เพิ่มการนัด " + "
        </p>
                </section>
            </Ons.Page>);
        } else {
            return (
                <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                    {
                        this.state.data.map((b) => (
                            <section key={b._links.self.href.split("/").pop()} style={{ textAlign: 'center' }}>


                                <section style={{ textAlign: 'center' }}>
                                    <img src={"http://pdr.suth.go.th/wp-content/uploads/2017/05/Capture-1-300x138.jpg"} alt="Onsen UI" style={{ width: '15%' }} />
                                </section>






                                <div>
                                    <p><b>แพทย์ผู้นัด : </b>
                                        {b.firstNameDocter + " " + b.lastNameDocter}</p>
                                </div>

                                <div>
                                    <p><b>แผนก-ห้องตรวจ : </b>
                                        {b.department}</p>
                                </div>

                                <div>
                                    <b>วันที่นัด : </b>
                                    {b.dateOfAppointment}

                                    <b>. เวลา : </b>
                                    {b.timeOfAppointment}
                                </div>


                                <p></p>

                                <div><b>ปฏิบัติก่อนพบแพทย์ :</b>
                                    {b.practice}
                                </div>

                                <p></p>

                                <div> <b>เหตุที่นัด :</b>
                                    {b.comment}
                                </div>





                                <div>
                                    <center>
                                        ***ติดต่อสอบถาม : 044-376-555 โรงพยาบาล มทส.***
                                    </center>
                                </div>
                                <p></p>
                                <center><Ons.Button style={{ margin: '6px' }} modifier='outline'>สั่งพิมพ์</Ons.Button></center>




                                <hr></hr>
                            </section>), this)
                    }

                </Ons.Page>
            );
        }
    }
}

//
// New baiNut
//
class PageNav3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title ? props.title : '?',
            fnDoc: '',
            lnDoc: '',
            depmnt: '',
            date: '',
            time: '',
            prac: '',
            cmnt: ''

        };
    }

    handleBackClick() {
        ons.notification.confirm('ย้อนกลับหรือไม่ ?')
            .then((response) => {
                if (response === 1) {
                    this.props.navigator.popPage();
                }
            });
    }

    componentWillUnmount() {
        this.props.onUnmount();
    }

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton onClick={this.handleBackClick.bind(this)}>ย้อนกลับ</Ons.BackButton></div>
                <div className='center'>{"สร้างใบนัดผู้ใช้บริการ ID  " + this.state.title}</div>
            </Ons.Toolbar>





        );
    }



    handleDFNameChange(e) {
        this.setState({ fnDoc: e.target.value });
    }

    handleDLNameChange(e) {
        this.setState({ lnDoc: e.target.value });
    }

    handleDpmntChange(e) {
        this.setState({ depmnt: e.target.value });
    }

    handleDateChange(e) {
        this.setState({ date: e.target.value });
    }

    handleTimeChange(e) {
        this.setState({ time: e.target.value });
    }

    handlePracticeChange(e) {
        this.setState({ prac: e.target.value });
    }

    handleCommentChange(e) {
        this.setState({ cmnt: e.target.value });
    }



    handleSaveClick() {
        client({
            method: 'GET', path: '/saveBainut/' + this.state.title + '/' + this.state.fnDoc + '/' + this.state.lnDoc
                + '/' + this.state.depmnt + '/' + this.state.date + '/' + this.state.time + '/' + this.state.prac + '/' + this.state.cmnt
        })
            .done((response) => {
                ons.notification.alert('บันทึกสำเร็จ');
                this.props.navigator.popPage();
            });
    }

    render() {
        return (

            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

                <section style={{ textAlign: 'center' }}>
                    <img src={"https://www.isnar-img.com/wp-content/uploads/medecine.png"} alt="Onsen UI" style={{ width: '20%' }} />
                </section>


                <section style={{ textAlign: 'center' }}>
                    <h1>แพทย์ผู้นัด</h1>

                    <div style={{margin: 20}}>
                          <Ons.Select id="choose-sel" value={this.state.fnDoc} fnDoc={this.state.fnDoc} onChange={this.handleDFNameChange.bind(this)}>
                                      <option value="janyutthana">janyutthana</option>

                             </Ons.Select>
                    </div>

                    <div style={{margin: 10}}>
                          <Ons.Select id="choose-sel" value={this.state.lnDoc} lnDoc={this.state.lnDoc} onChange={this.handleDLNameChange.bind(this)}>
                                      <option value="wiruswa">wiruswa</option>

                             </Ons.Select>
                    </div>




                {/*    <p>
                        <Ons.Input
                            value={this.state.fnDoc}
                            modifier='underbar'
                            onChange={this.handleDFNameChange.bind(this)}
                            float
                            placeholder='ชื่อ' />
                    </p>
                    <p>
                        <Ons.Input
                            value={this.state.lnDoc}
                            modifier='underbar'
                            onChange={this.handleDLNameChange.bind(this)}
                            float
                            placeholder='นามสกุล' />
                    </p>*/}
                  {/*  <p>
                        <Ons.Input
                            value={this.state.depmnt}
                            modifier='underbar'
                            onChange={this.handleDpmntChange.bind(this)}
                            float
                            placeholder='แผนก-ห้องตรวจ' />
                    </p>*/}


                <h1>แผนก-ห้องตรวจ</h1>
                    <div style={{margin: 20}}>
                          <Ons.Select id="choose-sel" value={this.state.depmnt} depmnt={this.state.depmnt} onChange={this.handleDpmntChange.bind(this)}>
                                      <option value="ศัลยกรรม">ศัลยกรรม</option>
                                      <option value="กุมารเวชกรรม">กุมารเวชกรรม</option>
                                      <option value="ทันตกรรม">ทันตกรรม</option>
                                      <option value="อายุรกรรม">อายุรกรรม</option>
                                      <option value="หู คอ จมูก">หู คอ จมูก</option>
                                      <option value="เภสัชกรรม">เภสัชกรรม</option>
                                      <option value="จิตเวช"> จิตเวช</option>
                             </Ons.Select>
                         </div>


                 <h1>วัน/เวลา</h1>
                    <p>
                        <Ons.Input
                            value={this.state.date}
                            modifier='underbar'
                            onChange={this.handleDateChange.bind(this)}
                            float
                            placeholder='วันที่นัด' />
                    </p>
                    <p>
                        <Ons.Input
                            value={this.state.time}
                            modifier='underbar'
                            onChange={this.handleTimeChange.bind(this)}
                            float
                            placeholder='เวลานัด' />
                    </p>


                    <h1>สิ่งที่ต้องเตรียม/ปฏิบัติก่อนพบแพทย์</h1>
                    <textarea
                        value={this.state.prac}
                        onChange={this.handlePracticeChange.bind(this)} />


                    <p> </p>

                    <h1>เหตุที่นัด</h1>
                    <textarea
                        value={this.state.cmnt}
                        onChange={this.handleCommentChange.bind(this)} />



                    <Ons.ListHeader>&nbsp;</Ons.ListHeader>



                    <p>
                        <Ons.Button onClick={this.handleSaveClick.bind(this)}>บันทึก</Ons.Button>
                    </p>
                </section>

            </Ons.Page>
        );
    }
}


class AppAe extends React.Component {
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

        return React.createElement(route.component, route.props);
    }

    render() {
        return (
            <Ons.Navigator initialRoute={{ component: PageNav1, props: { key: 'home' } }} renderPage={this.renderPage.bind(this)} ref={(navigator) => { this.navigator = navigator; }} />
        );
    }
}

/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */

ons.ready(function() {

  // ReactDOM.render(<QRCode value="http://facebook.github.io/react/" />, document.getElementById('myform'));
  ReactDOM.render(<App />, document.getElementById('react'));

});
