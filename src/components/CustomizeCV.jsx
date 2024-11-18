function CustomizeCV({ toPDF, targetRef }) {
    const downloadSection = () => (
        <div>
            <button onClick={() => toPDF()}>Download CV</button>
            <div ref={targetRef}></div>
        </div>
    );

    return downloadSection();
}

export default CustomizeCV;
