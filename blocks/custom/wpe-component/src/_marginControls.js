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
            padding: Object.assign( { all: undefined, top: undefined, bottom: undefined, left: undefined, right: undefined }, this.parentProps.attributes.padding),
            margin: this.parentProps.attributes.margin
		};
    }

    getPadding(type) {
        if( typeof this.state.padding == 'object' && this.state.padding.hasOwnProperty(type) ) {
            return this.state.padding[type];
        }
        else if( type == 'x' && typeof this.state.padding == 'object' ) {

            if( this.state.padding.hasOwnProperty('left') && this.state.padding.hasOwnProperty('right') && this.state.padding['left'] == this.state.padding['right'] )
                return this.state.padding['left'];
        }
        else if( type == 'y' && typeof this.state.padding == 'object' ) {

            if( this.state.padding.hasOwnProperty('top') && this.state.padding.hasOwnProperty('bottom') && this.state.padding['top'] == this.state.padding['bottom'] )
                return this.state.padding['top'];
        }
        
        return null;
    }

    getMargin(type) {
        if( typeof this.currentMargin == 'object' && this.currentMargin.hasOwnProperty(type) ) {
            return this.currentMargin[type];
        }
        else if( type == 'x' && typeof this.currentMargin == 'object' ) {

            if( this.currentMargin.hasOwnProperty('left') && this.currentMargin.hasOwnProperty('right') && this.currentMargin['left'] == this.currentMargin['right'] )
                return this.currentMargin['left'];
        }
        else if( type == 'y' && typeof this.currentMargin == 'object' ) {

            if( this.currentMargin.hasOwnProperty('top') && this.currentMargin.hasOwnProperty('bottom') && this.currentMargin['top'] == this.currentMargin['bottom'] )
                return this.currentMargin['top'];
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

        if( typeof this.currentMargin == 'undefined' ) {
            this.currentMargin = {};
        }
        
        this.currentMargin = Object.assign(this.currentMargin, { [type]: value });
        this.parentProps.setAttributes( { margin: this.currentMargin } );

        this.setState( { margin: this.currentMargin } );
    }

    resetPadding() {
        this.setState( { padding: { all: undefined, top: undefined, bottom: undefined, left: undefined, right: undefined } } );
        this.parentProps.setAttributes( { padding: undefined } );
    }
    
    resetMargin() {
        this.currentMargin = undefined;
        this.parentProps.setAttributes( { margin: this.currentMargin } );
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
        if( typeof this.currentMargin == 'object' && Object.keys(this.currentMargin).length > 0 ) {
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
                        label="Padding"
                        value={ this.state.padding.all }
                        onChange={ ( value ) => {
                            this.setPadding('all', value);
                        } }
                        min={ 0 }
                        max={ 5 }
                    />
                    <HorizontalRule />
                    <RangeControl
                        label="Padding X"
                        value={ this.getPadding('x') }
                        onChange={ ( value ) => {
                            this.setPadding('left', value);
                            this.setPadding('right', value);
                        } }
                        min={ 0 }
                        max={ 5 }
                    />
                    <RangeControl
                        label="Padding Y"
                        value={ this.getPadding('y') }
                        onChange={ ( value ) => {
                            this.setPadding('top', value);
                            this.setPadding('bottom', value);
                        } }
                        min={ 0 }
                        max={ 5 }
                    />
                    <HorizontalRule />
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
                    <RangeControl
                        label="Margin X"
                        value={ this.getMargin('x') }
                        onChange={ ( value ) => {
                            this.setMargin('left', value);
                            this.setMargin('right', value);
                        } }
                        min={ 0 }
                        max={ 5 }
                    />
                    <RangeControl
                        label="Margin Y"
                        value={ this.getMargin('y') }
                        onChange={ ( value ) => {
                            this.setMargin('top', value);
                            this.setMargin('bottom', value);
                        } }
                        min={ 0 }
                        max={ 5 }
                    />
                    <HorizontalRule />
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