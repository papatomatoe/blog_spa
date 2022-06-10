const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const { version } = require('./package.json');

const isProduction = process.env.NODE_ENV === 'production';

const styleLoadersConfig = [
	{
		loader: 'css-loader',
		options: {
			modules: {
				auto: /\.module.(c|sa|sc)ss$/,
				mode: 'pure',
				localIdentName: '[name]__[local]--[hash:base64:8]',
			},
		},
	},
	{
		loader: 'postcss-loader',
		options: {
			postcssOptions: {
				plugins: ['autoprefixer'],
			},
		},
	},
];

const config = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: `v${version}_bundle_[contenthash].js`,
		publicPath: '/',
		clean: true,
		crossOriginLoading: 'anonymous',
		module: true,
	},
	experiments: {
		topLevelAwait: true,
		outputModule: true,
	},
	devServer: {
		compress: true,
		historyApiFallback: true,
		port: '8000',
		hot: true,
		open: true,
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		plugins: [new TsconfigPathsPlugin()],
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, './public/assets'),
					to: 'assets',
					noErrorOnMissing: true,
				},
			],
		}),
		new HTMLWebpackPlugin({
			inject: 'body',
			template: './public/index.html',
			title: 'Test',
		}),
		new webpack.ProvidePlugin({
			React: 'react',
		}),
		new MiniCssExtractPlugin({ filename: '[name]_[contenthash].css', chunkFilename: '[id].css' }),
		new ImageminPlugin({
			test: /\.(jpe?g|png|gif|svg)$/i,
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', ...styleLoadersConfig],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', ...styleLoadersConfig, 'sass-loader'],
			},
			{
				test: /\.less$/i,
				use: [
					isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
					...styleLoadersConfig,
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								math: 'always',
								javascriptEnabled: true,
							},
						},
					},
				],
			},
			{
				test: /\.[jt]sx?$/i,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset',
			},
		],
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = 'production';
		config.devtool = false;
		config.optimization = {
			minimize: true,
			minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
		};
		config.entry = {
			index: {
				import: `./src/index.tsx`,
				dependOn: ['react'],
			},
			react: ['react', 'react-dom'],
		};
	} else {
		config.mode = 'development';
		config.devtool = 'inline-source-map';
		config.plugins.push(new webpack.HotModuleReplacementPlugin());
	}

	return config;
};
