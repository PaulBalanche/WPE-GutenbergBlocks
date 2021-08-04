import { Component } from '@wordpress/element';

import {
    PanelBody,
    RangeControl,
    Button,
    HorizontalRule
} from '@wordpress/components';

export class MarginControls extends Component {

	constructor(attr) {
        super( ...arguments );

        this.parentProps = attr.props;

        this.state = {
            padding: Object.assign( { all: undefined, top: undefined, bottom: undefined, left: undefined, right: undefined, x: undefined, y: undefined }, this.parentProps.attributes.padding),
            margin: Object.assign( { all: undefined, top: undefined, bottom: undefined, left: undefined, right: undefined, x: undefined, y: undefined }, this.parentProps.attributes.margin)
		};
    }

    getPadding(type) {
        if( typeof this.state.padding == 'object' && this.state.padding.hasOwnProperty(type) ) {
            return this.state.padding[type];
        }
        
        return null;
    }

    getMargin(type) {
        if( typeof this.state.margin == 'object' && this.state.margin.hasOwnProperty(type) ) {
            return this.state.margin[type];
        }
        else if( type == 'x' && typeof this.state.margin == 'object' ) {

            if( this.state.margin.hasOwnProperty('left') && this.state.margin.hasOwnProperty('right') && this.state.margin.left == this.state.margin.right )
                return this.state.margin.left;
        }
        else if( type == 'y' && typeof this.state.margin == 'object' ) {

            if( this.state.margin.hasOwnProperty('top') && this.state.margin.hasOwnProperty('bottom') && this.state.margin.top == this.state.margin.bottom )
                return this.state.margin.top;
        }
        
        return null;
    }

    setPadding( type, value ) {

        if( typeof this.state.padding == 'undefined' ) {
            this.setState( { padding: {} } );
        }
        
        this.setState( { padding: Object.assign(this.state.padding, { [type]: value }) } );
        this.parentProps.setAttributes( { padding: this.state.padding } );
    }
    
    setMargin( type, value ) {

        if( typeof this.state.margin == 'undefined' ) {
            this.setState( { margin: {} } );
        }
        
        this.setState( { margin: Object.assign(this.state.margin, { [type]: value }) } );
        this.parentProps.setAttributes( { margin: this.state.margin } );
    }

    resetPadding() {
        this.setState( { padding: { all: undefined, top: undefined, bottom: undefined, left: undefined, right: undefined, x: undefined, y: undefined } } );
        this.parentProps.setAttributes( { padding: undefined } );
    }
    
    resetMargin() {
        this.setState( { margin: { all: undefined, top: undefined, bottom: undefined, left: undefined, right: undefined, x: undefined, y: undefined } } );
        this.parentProps.setAttributes( { margin: undefined } );
    }

    render() {

        var btnResetPadding = [];
        if( typeof this.state.padding == 'object' && Object.keys(this.state.padding).length > 0 ) {
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
        if( typeof this.state.margin == 'object' && Object.keys(this.state.margin).length > 0 ) {
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
                <PanelBody title={ 'Padding' } initialOpen={ false }>
                    <RangeControl
                        label="All"
                        value={ this.state.padding.all }
                        onChange={ ( value ) => {
                            this.setPadding('all', value);
                        } }
                        min={ 0 }
                        max={ 5 }
                    />
                    <HorizontalRule />
                    <div class="child-range-control">
                        <RangeControl
                            label="Padding Y"
                            value={ this.state.padding.y }
                            onChange={ ( value ) => {
                                this.setPadding('y', value);
                            } }
                            min={ 0 }
                            max={ 5 }
                        />
                        <div class="child-range-control">
                            <RangeControl
                                label="Padding Top"
                                value={ this.state.padding.top }
                                onChange={ ( value ) => 
                                    this.setPadding('top', value)
                                }
                                min={ 0 }
                                max={ 5 }
                            />
                            <RangeControl
                                label="Padding Bottom"
                                value={ this.state.padding.bottom }
                                onChange={ ( value ) =>
                                    this.setPadding('bottom', value)
                                }
                                min={ 0 }
                                max={ 5 }
                            />
                        </div>
                        <HorizontalRule />
                        <RangeControl
                            label="Padding X"
                            value={ this.state.padding.x }
                            onChange={ ( value ) => {
                                this.setPadding('x', value);
                            } }
                            min={ 0 }
                            max={ 5 }
                        />
                        <div class="child-range-control">
                            <RangeControl
                                label="Padding Left"
                                value={ this.state.padding.left }
                                onChange={ ( value ) => 
                                    this.setPadding('left', value)
                                }
                                min={ 0 }
                                max={ 5 }
                            />
                            <RangeControl
                                label="Padding Right"
                                value={ this.state.padding.right }
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
                        label="Margin"
                        value={ this.state.margin.all }
                        onChange={ ( value ) => {
                            this.setMargin('all', value);
                        } }
                        min={ 0 }
                        max={ 5 }
                    />
                    <HorizontalRule />
                    <div class="child-range-control">
                        <RangeControl
                            label="Margin Y"
                            value={ this.state.margin.y }
                            onChange={ ( value ) => {
                                this.setMargin('y', value);
                            } }
                            min={ 0 }
                            max={ 5 }
                        />
                        <div class="child-range-control">
                            <RangeControl
                                label="Margin Top"
                                value={ this.state.margin.top }
                                onChange={ ( value ) =>
                                    this.setMargin('top', value)
                                }
                                min={ 0 }
                                max={ 5 }
                            />
                            <RangeControl
                                label="Margin Bottom"
                                value={ this.state.margin.bottom }
                                onChange={ ( value ) =>
                                    this.setMargin('bottom', value)
                                }
                                min={ 0 }
                                max={ 5 }
                            />
                        </div>
                        <HorizontalRule />
                        <RangeControl
                            label="Margin X"
                            value={ this.state.margin.x }
                            onChange={ ( value ) => {
                                this.setMargin('x', value);
                            } }
                            min={ 0 }
                            max={ 5 }
                        />
                        <div class="child-range-control">
                            <RangeControl
                                label="Margin Left"
                                value={ this.state.margin.left }
                                onChange={ ( value ) =>
                                    this.setMargin('left', value)
                                }
                                min={ 0 }
                                max={ 5 }
                            />
                            <RangeControl
                                label="Margin Right"
                                value={ this.state.margin.right }
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