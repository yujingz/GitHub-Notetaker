var React = require('react-native');

var {
  View,
  Text,
  StyleSheet
} = React;

class Dashboard extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the dashboard!</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

module.exports = Dashboard;
