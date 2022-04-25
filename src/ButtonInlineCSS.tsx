const ButtonStyle = { 
    backgroundColor: 'red',
    border: 0,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    padding: "15px",
    borderRadius: "3px"
};

const ButtonInlineCSS = () => (
    <button type="button" style={ButtonStyle}>Klicka här!</button>
)

export default ButtonInlineCSS;