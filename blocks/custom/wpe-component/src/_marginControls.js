import { Component } from '@wordpress/element';

import {
    PanelBody,
    RangeControl,
    Button,
    HorizontalRule
} from '@wordpress/components';

import { merge } from 'merge-anything'


export class MarginControls extends Component {

	constructor( attr ) {
        super( ...arguments );
        this.parentProps = attr.props;

        this.state = {
            padding: merge( {
                mobile: { all: undefined, top: undefined, bottom: undefined, left: undefined, right: undefined, x: undefined, y: undefined },
                tablet: { all: undefined, top: undefined, bottom: undefined, left: undefined, right: undefined, x: undefined, y: undefined },
                desktop: { all: undefined, top: undefined, bottom: undefined, left: undefined, right: undefined, x: undefined, y: undefined }
            }, this.parentProps.attributes.padding),
            margin: merge( {
                mobile: { all: undefined, top: undefined, bottom: undefined, left: undefined, right: undefined, x: undefined, y: undefined },
                tablet: { all: undefined, top: undefined, bottom: undefined, left: undefined, right: undefined, x: undefined, y: undefined },
                desktop: { all: undefined, top: undefined, bottom: undefined, left: undefined, right: undefined, x: undefined, y: undefined }
            }, this.parentProps.attributes.margin)
		};
    }

    getPadding( type ) {
        if( this.state.padding[this.props.deviceType.toLowerCase()].hasOwnProperty(type) ) {
            return this.state.padding[this.props.deviceType.toLowerCase()][type];
        }
        
        return null;
    }

    getMargin( type ) {
        if( this.state.margin[this.props.deviceType.toLowerCase()].hasOwnProperty(type) ) {
            return this.state.margin[this.props.deviceType.toLowerCase()][type];
        }
        
        return null;
    }

    setPadding( type, value ) {
        
        this.setState( { padding: Object.assign(this.state.padding[this.props.deviceType.toLowerCase()], { [type]: value }) } );
        this.parentProps.setAttributes( { padding: this.state.padding } );
    }
    
    setMargin( type, value ) {
        
        this.setState( { margin: Object.assign(this.state.margin[this.props.deviceType.toLowerCase()], { [type]: value }) } );
        this.parentProps.setAttributes( { margin: this.state.margin } );
    }

    resetPadding() {
        // this.setState( { padding: { all: undefined, top: undefined, bottom: undefined, left: undefined, right: undefined, x: undefined, y: undefined } } );
        // this.parentProps.setAttributes( { padding: undefined } );
    }
    
    resetMargin() {
        // this.setState( { margin: { all: undefined, top: undefined, bottom: undefined, left: undefined, right: undefined, x: undefined, y: undefined } } );
        // this.parentProps.setAttributes( { margin: undefined } );
    }

    render() {

        var btnResetPadding = [];
        if( typeof this.state.padding[this.props.deviceType.toLowerCase()] == 'object' && Object.keys(this.state.padding).length > 0 ) {
            btnResetPadding.push(
                <div key={ "containerResetPadding-" + this.parentProps.clientId }>
                    <HorizontalRule />
                    <Button
                        variant="secondary"
                        className="is-secondary"
                        onClick={ () => 
                            this.resetPadding()
                        }
                    >
                        Reset
                    </Button>
                </div>
            )
        }

        var btnResetMargin = [];
        if( typeof this.state.margin[this.props.deviceType.toLowerCase()] == 'object' && Object.keys(this.state.margin[this.props.deviceType.toLowerCase()]).length > 0 ) {
            btnResetMargin.push(
                <div key={ "containerResetMargin-" + this.parentProps.clientId }>
                    <HorizontalRule />
                    <Button
                        variant="secondary"
                        className="is-secondary"
                        onClick={ () => 
                            this.resetMargin()
                        }
                    >
                        Reset
                    </Button>
                </div>
            )
        }

        return (
            <>
                <PanelBody title={ 'Padding (' + this.props.deviceType.toLowerCase() + ')' } initialOpen={ false }>
                    <RangeControl
                        label="All"
                        value={ this.state.padding[this.props.deviceType.toLowerCase()].all }
                        onChange={ ( value ) => {
                            this.setPadding('all', value);
                        } }
                        min={ 0 }
                        max={ 5 }
                    />
                    <HorizontalRule />
                    <div className="child-range-control">
                        <RangeControl
                            label="Padding Y"
                            value={ this.state.padding[this.props.deviceType.toLowerCase()].y }
                            onChange={ ( value ) => {
                                this.setPadding('y', value);
                            } }
                            min={ 0 }
                            max={ 5 }
                        />
                        <div className="child-range-control">
                            <RangeControl
                                label="Top"
                                value={ this.state.padding[this.props.deviceType.toLowerCase()].top }
                                onChange={ ( value ) => 
                                    this.setPadding('top', value)
                                }
                                min={ 0 }
                                max={ 5 }
                            />
                            <RangeControl
                                label="Bottom"
                                value={ this.state.padding[this.props.deviceType.toLowerCase()].bottom }
                                onChange={ ( value ) =>
                                    this.setPadding('bottom', value)
                                }
                                min={ 0 }
                                max={ 5 }
                            />
                        </div>
                        <HorizontalRule />
                        <RangeControl
                            label="X"
                            value={ this.state.padding[this.props.deviceType.toLowerCase()].x }
                            onChange={ ( value ) => {
                                this.setPadding('x', value);
                            } }
                            min={ 0 }
                            max={ 5 }
                        />
                        <div className="child-range-control">
                            <RangeControl
                                label="Left"
                                value={ this.state.padding[this.props.deviceType.toLowerCase()].left }
                                onChange={ ( value ) => 
                                    this.setPadding('left', value)
                                }
                                min={ 0 }
                                max={ 5 }
                            />
                            <RangeControl
                                label="Right"
                                value={ this.state.padding[this.props.deviceType.toLowerCase()].right }
                                onChange={ ( value ) =>
                                    this.setPadding('right', value)
                                }
                                min={ 0 }
                                max={ 5 }
                            />
                        </div>
                    </div>
                    { btnResetPadding }
                </PanelBody>
                <PanelBody title={ 'Margin' } initialOpen={ false }>
                    <RangeControl
                        label="All"
                        value={ this.state.margin[this.props.deviceType.toLowerCase()].all }
                        onChange={ ( value ) => {
                            this.setMargin('all', value);
                        } }
                        min={ 0 }
                        max={ 5 }
                    />
                    <HorizontalRule />
                    <div className="child-range-control">
                        <RangeControl
                            label="Y"
                            value={ this.state.margin[this.props.deviceType.toLowerCase()].y }
                            onChange={ ( value ) => {
                                this.setMargin('y', value);
                            } }
                            min={ 0 }
                            max={ 5 }
                        />
                        <div className="child-range-control">
                            <RangeControl
                                label="Top"
                                value={ this.state.margin[this.props.deviceType.toLowerCase()].top }
                                onChange={ ( value ) =>
                                    this.setMargin('top', value)
                                }
                                min={ 0 }
                                max={ 5 }
                            />
                            <RangeControl
                                label="Bottom"
                                value={ this.state.margin[this.props.deviceType.toLowerCase()].bottom }
                                onChange={ ( value ) =>
                                    this.setMargin('bottom', value)
                                }
                                min={ 0 }
                                max={ 5 }
                            />
                        </div>
                        <HorizontalRule />
                        <RangeControl
                            label="X"
                            value={ this.state.margin[this.props.deviceType.toLowerCase()].x }
                            onChange={ ( value ) => {
                                this.setMargin('x', value);
                            } }
                            min={ 0 }
                            max={ 5 }
                        />
                        <div className="child-range-control">
                            <RangeControl
                                label="Left"
                                value={ this.state.margin[this.props.deviceType.toLowerCase()].left }
                                onChange={ ( value ) =>
                                    this.setMargin('left', value)
                                }
                                min={ 0 }
                                max={ 5 }
                            />
                            <RangeControl
                                label="Right"
                                value={ this.state.margin[this.props.deviceType.toLowerCase()].right }
                                onChange={ ( value ) =>
                                    this.setMargin('right', value)
                                }
                                min={ 0 }
                                max={ 5 }
                            />
                        </div>
                    </div>
                    { btnResetMargin }
                </PanelBody>
            </>
        );
    }

}

export function generateMarginClassName(props) {
    
    var {
        attributes,
        className
    } = props;

    if( typeof className == 'undefined' )
        className = '';

    if( typeof attributes.margin == 'object' ) {
        for( const [key, value] of Object.entries(attributes.margin) ) {
            switch( value ) {
                case 0:
                    className += ' ' + key + '-none';
                    break;
                case 1:
                    className += ' ' + key + '-smaller';
                    break;
                case 2:
                    className += ' ' + key + '-small';
                    break;
                case 3:
                    className += ' ' + key + '-medium';
                    break;
                case 4:
                    className += ' ' + key + '-big';
                    break;
                case 5:
                    className += ' ' + key + '-bigger';
                    break;
            }
        }
    }

    return ( className != '' ) ? className : false;
}