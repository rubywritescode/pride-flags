import { Composition } from 'remotion';
import { PrideAcab } from './prideAcab/PrideAcab';

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
		</>
	);
};
