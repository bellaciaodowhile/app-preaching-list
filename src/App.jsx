import { ModalProvider } from './context/ModalProvider';
import { FormStepsProvider } from "./context/FormStepsProvider";
import { AnimatedRoutes } from './components/AnimatedRoutes';
import { Navigation } from './components/Navigation';
import { Container } from './components/Container';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';


export default function App() {
  return (
    <>
      <FormStepsProvider>
        <ModalProvider>
            <Toaster position="top-center" richColors />
            <Navigation></Navigation>
              <Container>
                <AnimatedRoutes></AnimatedRoutes>
              </Container>
            <Footer></Footer>
        </ModalProvider>
      </FormStepsProvider>
    </>
  );
}
