const Section = (props) => {
const {title, children} = props;
    return (<>
    <h1>{title}</h1>
    {children}</>
    )
}

export default Section;
