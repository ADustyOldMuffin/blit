import { ActionBar } from '../action-bar';
import { LeftInteractionPanel } from './left-interaction-panel';
import { RightInteractionPanel } from './right-interaction-panel';
import { WorkingArea } from './working-area';

export function App(): JSX.Element {
  return (
    <div className="h-screen flex flex-col">
      <ActionBar></ActionBar>
      <div className="grow flex flex-row">
        <LeftInteractionPanel />
        <WorkingArea />
        <RightInteractionPanel />
      </div>
    </div>
  );
}
