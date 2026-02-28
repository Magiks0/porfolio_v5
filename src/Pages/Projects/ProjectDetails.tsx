import { useParams } from "react-router"

export default function ProjectDetails() {
    const params = useParams();

    return (
        <>
            {params.slug}
        </>
    )
}