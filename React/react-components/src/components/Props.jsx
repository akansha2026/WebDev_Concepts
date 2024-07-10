import PropTypes from 'prop-types';

export default function Props(props){
    const {name, age} = props;
    return (
        <div>
            <h1>Props</h1>
            <p>Props are arguments passed into React components. Props are passed to components via HTML attributes.</p>
            <p>Props are read-only, which means that a component must always render the same output for the same input.</p>
            {
                name ? <p>Hello, {name}</p> : <p>Hello, Stranger</p>
            }
            {
                age ? <p>Age: {age}</p> : <p>Age: Not Specified</p>
            }
        </div>
    )
}

Props.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};