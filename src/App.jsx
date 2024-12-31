import { ModalProvider } from './context/ModalProvider';
import { AnimatedRoutes } from './components/AnimatedRoutes';
import { Navigation } from './components/Navigation';
import { Container } from './components/Container';
import { Footer } from './components/Footer';



export default function App() {
  return (
    <>
    <ModalProvider>
      <Navigation></Navigation>
        <Container>
          <AnimatedRoutes></AnimatedRoutes>
        </Container>
      <Footer></Footer>
    </ModalProvider>
    </>
  );
}
