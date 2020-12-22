import { Component } from '@wordpress/element';

import {
    PanelBody,
    RangeControl
} from '@wordpress/components';

export class MarginControls extends Component {

	constructor(attr) {
        super( ...arguments );
        this.parentProps = attr.props;
    }

    getMargin(type) {
        let currentMargin = { ...this.parentProps.attributes.margin };
        if( typeof currentMargin == 'object' && currentMargin.hasOwnProperty(type) ) {
            return currentMargin[type];
        }
        
        return null;
    }

    setMargin( type, value ) {

        let currentMargin = { ...this.parentProps.attributes.margin };
        if( typeof currentMargin == 'undefined' ) {
            currentMargin = {};
        }
        
        this.parentProps.setAttributes( { margin: Object.assign(currentMargin, { [type]: value }) } );
    }

    render() {

        return (
            <PanelBody title={ 'Padding/Margin' } initialOpen={ false }>
                <RangeControl
                    label="Padding Top"
                    value={ this.getMargin('pt') }
                    onChange={ ( value ) => 
                        this.setMargin('pt', value)
                    }
                    min={ 0 }
                    max={ 5 }
                />
                <RangeControl
                    label="Padding Bottom"
                    value={ this.getMargin('pb') }
                    onChange={ ( value ) =>
                        this.setMargin('pb', value)
                    }
                    min={ 0 }
                    max={ 5 }
                />
                <RangeControl
                    label="Margin Top"
                    value={ this.getMargin('mt') }
                    onChange={ ( value ) =>
                        this.setMargin('mt', value)
                    }
                    min={ 0 }
                    max={ 5 }
                />
                <RangeControl
                    label="Margin Bottom"
                    value={ this.getMargin('mb') }
                    onChange={ ( value ) =>
                        this.setMargin('mb', value)
                    }
                    min={ 0 }
                    max={ 5 }
                />
            </PanelBody>
        );
    }

}

export function generateMarginClassName(props) {
    
    var {
        attributes,
        className
    } = props;

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

    return className;
}