function CustomizeCV({ toPDF }) {
    const downloadSection = () => (
        <div>
            <button onClick={() => toPDF()}>Download CV</button>
        </div>
    );

    return downloadSection();
}

export default CustomizeCV;
