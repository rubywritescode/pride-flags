import { Composition } from 'remotion';
import { PrideAcab } from './prideAcab/PrideAcab';
import { TranscendFlag } from './transcend/TranscendFlag';

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="PrideAcab"
				component={PrideAcab}
				durationInFrames={240}
				fps={30}
				width={1080}
				height={1920}
				// defaultProps={{
				// }}
			/>
			<Composition
				id="Transcend"
				component={TranscendFlag}
				durationInFrames={120}
				fps={30}
				width={1080}
				height={1920}
				defaultProps={{
					keyword: 'TRANSCEND'
				}}
			/>
		</>
	);
};
