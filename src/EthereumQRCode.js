import React, { Component } from 'react';
import EthereumQRplugin from 'ethereum-qr-code'
import uniqueId from 'lodash.uniqueid';
import PropTypes from 'prop-types';

class EthereumQRCode extends Component {

  constructor(props) {
    super(props);
    this.generator = new EthereumQRplugin();
    this.id = uniqueId('qrCode');
  }

  componentDidMount() {
    this.generateQRCode();
  }

  componentDidUpdate(prevProps, prevState) {
    this.generateQRCode();
  }

  generateQRCode() {

    let sendDetails;
    if (this.props.uriScheme) {
      sendDetails = this.generator.readStringToJSON(this.props.uriScheme);
    } else {
        var wei_value = this.props.value * Math.pow(10,18)
        sendDetails = {
          to: this.props.to,
          value: wei_value,
          gas: this.props.gas
        };
    }

    const qrCode = this.generator.toCanvas(sendDetails, {
      selector: `#${this.id}`,
      size:this.props.size
    });

    qrCode.then((code) => {
      if (this.props.afterGenerate) {
        this.props.afterGenerate(code);
      }
    })
  }

  render() {
    return (
      <div id={this.id}></div>
    );
  }
}

EthereumQRCode.propTypes = {
  uriScheme: PropTypes.string,
  to: PropTypes.string,
  value: PropTypes.number,
  gas: PropTypes.number,
  afterGenerate: PropTypes.func
}

export default EthereumQRCode