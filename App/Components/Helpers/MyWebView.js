var React = require('react-native');

var {
  View,
  WebView,
  StyleSheet
} = React;

class MyWebView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView url={this.props.url} />
      </View>
    )
  }
}

MyWebView.propTypes = {
  url: React.PropTypes.string.isRequired
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column'
  }
})

module.exports = MyWebView;
