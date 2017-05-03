import React from 'react';

class App extends React.Component {
    render() {
        return (
            <Parent>
                <div className="childA"></div>
            </Parent>
        )
    }
}

class Parent extends React.Component{
    render(){
        //console.log(this.props.children)

        //single object
        //let items = React.Children
        //    .map(this.props.children, child => child)


        //let items = React.Children
        //    .forEach(this.props.children, child => console.log(child.props.className))

        let items = React.Children.only(this.props.children)

        console.log(items)
        return null
    }
}

export default App