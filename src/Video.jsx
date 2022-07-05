import { Composition } from 'remotion';
import { PrideAcab } from './prideAcab/PrideAcab';
import { TranscendFlag } from './transcend/TranscendFlag';
import { TrainsFlag } from './trainsFlag/TrainsFlag';

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
			<Composition
				id="TrainsFlag"
				component={TrainsFlag}
				durationInFrames={150}
				fps={30}
				width={1080}
				height={1920}
				// defaultProps={{
				// 	keyword: 'TRANSCEND'
				// }}
			/>
		</>
	);
};
