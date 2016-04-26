import React from 'react';
import ReactDOM from 'react-dom';
import {Navigator, Page, Button, Toolbar, BackButton} from 'react-onsenui';

// load Onsen UI library
import 'onsenui';

class MainPage extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({component: SecondPage});
  }

  render() {
    return (
      <Page>
        <Toolbar>
          <div className="center">Navigator</div>
        </Toolbar>

        <p style={{textAlign: 'center'}}>
          <Button onClick={this.pushPage.bind(this)}>Push page</Button>
        </p>
      </Page>
    );
  }
}

class SecondPage extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({component: SecondPage});
  }

  popPage() {
    this.props.navigator.popPage();
  }

  render() {
    return (
      <Page>
        <Toolbar>
          <div className="left"><BackButton>Back</BackButton></div>
          <div className="center">Another page</div>
        </Toolbar>

        <p style={{textAlign: 'center'}}>
          <Button onClick={this.pushPage.bind(this)}>Push page</Button>
          <Button onClick={this.popPage.bind(this)}>Pop page</Button>
        </p>
      </Page>
    );
  }
}

class App extends React.Component {
  renderPage(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;

    return React.createElement(route.component, props);
  }

  render() {
    return (
      <Navigator
        initialRoute={{component: MainPage}}
        renderPage={this.renderPage}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
