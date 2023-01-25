import {
  TransitionGroup,
  Transition as ReactTransition,
  TransitionStatus,
} from "react-transition-group";
import { ReactElement } from "react";
import CSS from "csstype";
type Transition<T> = {
  children: T;
  location: string;
};
const DURATION = 500;
const TIMEOUT = 200;

const defaultStyle = {
  transition: `${DURATION}ms ease-in-out`,
  opacity: 0,
};
const transitionStyles: Partial<Record<TransitionStatus, CSS.Properties>> = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Transition: React.FC<Transition<ReactElement>> = ({
  children,
  location,
}) => {
  return (
    <TransitionGroup style={{ position: "relative" }}>
      <ReactTransition
        key={location}
        timeout={{
          enter: TIMEOUT,
          exit: TIMEOUT,
        }}
      >
        {(state) => (
          <main
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {children}
          </main>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
};
export default Transition;
