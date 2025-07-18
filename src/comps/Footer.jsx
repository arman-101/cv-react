import "../styles/footer.css"

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="footer">
            <p>Arman @{year}</p>
            <a href="https://github.com/arman-101/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="github-link"/></a>
        </div>
    )
}