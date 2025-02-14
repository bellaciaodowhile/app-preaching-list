import { FormSteps } from "../components/FormSteps";
import { PREACHERS_INIT } from "../helpers/preachers";
import { SENIORS_INIT } from "../helpers/seniors";


export const Demo = () => {
    return (
        <FormSteps preachers={PREACHERS_INIT} seniors={SENIORS_INIT} />
    )
}
