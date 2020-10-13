import React, {Component} from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    /*
    * originally we updated component if show state changed
    * but when we pass children of component (spinner) first condition didn't trigger update
    * so for this reason we should also || check if get updated
    * */
    shouldComponentUpdate(nextProps, nextState) {
         return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    // componentWillUpdate() {
    //     console.log('[Modal] WillUpdate');
    // }

    render() {
        return (
            <>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        //if 'show' prop is true show
                        //otherwise hide from screen with css translate-100 + opacity 0
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                    }}>
                    {this.props.children}
                </div>
            </>
            )

    }
}
export default Modal;
