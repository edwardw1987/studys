/*
* @Author: python
* @Date:   2016-02-24 13:29:23
* @Last Modified by:   python
* @Last Modified time: 2016-02-25 10:44:48
*/

'use strict';
var Toy = React.createClass({
    getInitialState () {
        return {show: false}
    },
    render () {
        let stylesClose = {
            color: '#fff',
            backgroundColor:'#999',
            width: '100%',
            height: '35px',
            textAlign: 'center',
            WebkitTransition: 'height .3s ease-out',
                  transition: 'height .3s ease-out',
            },
            stylesOpen = Object.assign({}, stylesClose, {
                color: '#000',
                backgroundColor: '#eee',
                height: '300px'
            });

        return (<div
                 style={this.props.show ? stylesOpen: stylesClose}
                 // onTouchStart={this.handleTouchStart}
                 onClick={this.handleTouchStart}>
                 {/*this.state.show? 'close': 'open'*/}
                </div>)
    },
    handleTouchStart (e) {
        this.setState({show:!this.state.show})
    }
});

var UploadButton = React.createClass({
    getInitialState () {
        return {loaded: false};
    },
    render () {
        let unloadedStyle = {
                width: '100%',
                height: '41px',
                display: 'block', 
                maxWidth: '414px',
                margin: '0 auto', // require display: block
                position: 'fixed', // only work with left, right, top, bottom
                bottom: 0,
                left: '50%',
                outline: 'none',
                 // require display: block
                WebkitTransition: 'background-color .3s ease-out',
                      transition: 'background-color .3s ease-out',
                WebkitTransform: 'translate3d(-50%, 0, 0)',
                      transform: 'translate3d(-50%, 0, 0)',

            };
        return (<button 
                 style={unloadedStyle}
                 className={this.state.loaded? 'btn btn-success': 'btn btn-info'}
                 onClick={this.handleClick}
                >{this.state.loaded? 'close': 'open'}</button>)
    },
    handleClick () {
        this.props.handler();
        // this.setState({loaded: !this.state.loaded})
        this.setState({loaded: !this.props.loaded})
    }
});
var Group = React.createClass({
    getInitialState () {
        return {show: false}
    },
    handleToggle (){
        this.setState({ show: !this.state.show});
        return this.state.show;
    },
    render () {
        return (
            <div>
                <Toy show={ this.state.show }/>
                <UploadButton handler={this.handleToggle} loaded={this.state.show}/>
            </div>
        );
    }
})
ReactDOM.render(<Group/>, document.getElementById('example'));