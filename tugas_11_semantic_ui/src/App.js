import { Component } from "react";
import "semantic-ui-css/semantic.min.css"
import { Button, Dimmer, Divider, Grid, Header, Icon, Image,  List,  Loader, Placeholder, Search, Segment } from "semantic-ui-react";



class App extends Component{
  render(){
    return(
      <div>
        <br/>
  <Segment placeholder>
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>Or</Divider>

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon>
            <Icon name='search' />
            Cari Document
          </Header>

          <Search placeholder='Search Document' />
        </Grid.Column>

        <Grid.Column>
          <Header icon>
            <Icon name='pdf file outline' />
            Tambah Dokument Baru
          </Header>
          <Button primary>Create Document</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  <Segment>
    <Dimmer active>
      <Loader>Loading</Loader>

    </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
  </Segment>
    <Grid container columns={3} stackable>
      <Grid.Column>
        <Segment raised>
          <Placeholder>
      <Placeholder.Header image>
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Header>
      <Placeholder.Paragraph>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Paragraph>
      </Placeholder>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment raised>
        <Placeholder>
        <Placeholder.Header image>
        <Placeholder.Line />
        <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        </Placeholder.Paragraph>
        </Placeholder>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <h3>Website terkait</h3>
        <List>
        <List.Item
          icon='linkify'
          content={<a href='https://www.google.com/'>Google</a>}
        />
        <List.Item
        icon='linkify'
        content={<a href='https://www.facebook.com/'>Facebook</a>}
        />
      <List.Item
          icon='linkify'
          content={<a href='http://www.semantic-ui.com'>Semantic UI</a>}
        />
        <List.Item
          icon='linkify'
          content={<a href="https://niomic.id/">Niomic</a>}
        />
        <List.Item
          icon='linkify'
          content={<a href='https://react.dev/'>react</a>}
        />
        </List>
      </Grid.Column>
    </Grid>
      </div>
     
    )
  }
}

export default App;
