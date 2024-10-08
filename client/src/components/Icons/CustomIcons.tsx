import Icon from '@ant-design/icons';
import { GetProps } from 'antd';
import React from 'react';

type CustomIconComponentProps = GetProps<typeof Icon>;

const StreamlineComputerConnectionSvg: React.FC<React.SVGProps<SVGSVGElement>> =
  React.memo((props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.8em"
      height="1.8em"
      viewBox="0 0 14 14"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9.5L.5 7L3 4.5m8 5L13.5 7L11 4.5" />
        <circle cx="9" cy="7" r=".5" />
        <circle cx="5" cy="7" r=".5" />
      </g>
    </svg>
  ));

export const StreamlineComputerConnection = (
  props: Partial<CustomIconComponentProps>,
) => <Icon component={StreamlineComputerConnectionSvg} {...props} />;

const LogosGitlabSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 256 236"
      {...props}
    >
      <path
        fill="#E24329"
        d="m128.075 236.075l47.104-144.97H80.97l47.104 144.97Z"
      />
      <path
        fill="#FC6D26"
        d="M128.075 236.074L80.97 91.104H14.956l113.119 144.97Z"
      />
      <path
        fill="#FCA326"
        d="M14.956 91.104L.642 135.16a9.752 9.752 0 0 0 3.542 10.903l123.891 90.012l-113.12-144.97Z"
      />
      <path
        fill="#E24329"
        d="M14.956 91.105H80.97L52.601 3.79c-1.46-4.493-7.816-4.492-9.275 0l-28.37 87.315Z"
      />
      <path
        fill="#FC6D26"
        d="m128.075 236.074l47.104-144.97h66.015l-113.12 144.97Z"
      />
      <path
        fill="#FCA326"
        d="m241.194 91.104l14.314 44.056a9.752 9.752 0 0 1-3.543 10.903l-123.89 90.012l113.119-144.97Z"
      />
      <path
        fill="#E24329"
        d="M241.194 91.105h-66.015l28.37-87.315c1.46-4.493 7.816-4.492 9.275 0l28.37 87.315Z"
      />
    </svg>
  ),
);

export const LogosGitlab = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={LogosGitlabSvg} {...props} />
);

const EosIconsCronjobSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10.021 1.021h6v2h-6zM20.04 7.41l1.434-1.434l-1.414-1.414l-1.433 1.433A8.989 8.989 0 0 0 7.53 5.881l1.42 1.44a7.038 7.038 0 0 1 4.06-1.3l.01.001v6.98l4.953 4.958A7.001 7.001 0 0 1 6.01 13.021h3l-4-4l-4 4h3A9 9 0 1 0 20.04 7.41Z"
      />
    </svg>
  ),
);

export const EosIconsCronjob = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={EosIconsCronjobSvg} {...props} />
);

const IonServerSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M256 428c-52.35 0-111.39-11.61-157.93-31c-17.07-7.19-31.69-18.82-43.64-28a4 4 0 0 0-6.43 3.18v12.58c0 28.07 23.49 53.22 66.14 70.82C152.29 471.33 202.67 480 256 480s103.7-8.67 141.86-24.42C440.51 438 464 412.83 464 384.76v-12.58a4 4 0 0 0-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 28c-46.54 19.39-105.57 31-157.92 31Zm208-301.49c-.81-27.65-24.18-52.4-66-69.85C359.74 40.76 309.34 32 256 32s-103.74 8.76-141.91 24.66c-41.78 17.41-65.15 42.11-66 69.69L48 144c0 6.41 5.2 16.48 14.63 24.73c11.13 9.73 27.65 19.33 47.78 27.73C153.24 214.36 207.67 225 256 225s102.76-10.68 145.59-28.58c20.13-8.4 36.65-18 47.78-27.73C458.8 160.49 464 150.42 464 144Z"
      />
      <path
        fill="currentColor"
        d="M413.92 226c-46.53 19.43-105.57 31-157.92 31s-111.39-11.57-157.93-31c-17.07-7.15-31.69-18.79-43.64-28a4 4 0 0 0-6.43 3.22V232c0 6.41 5.2 14.48 14.63 22.73c11.13 9.74 27.65 19.33 47.78 27.74C153.24 300.34 207.67 311 256 311s102.76-10.68 145.59-28.57c20.13-8.41 36.65-18 47.78-27.74C458.8 246.47 464 238.41 464 232v-30.78a4 4 0 0 0-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 27.96Z"
      />
      <path
        fill="currentColor"
        d="M413.92 312c-46.54 19.41-105.57 31-157.92 31s-111.39-11.59-157.93-31c-17.07-7.17-31.69-18.81-43.64-28a4 4 0 0 0-6.43 3.2V317c0 6.41 5.2 14.47 14.62 22.71c11.13 9.74 27.66 19.33 47.79 27.74C153.24 385.32 207.66 396 256 396s102.76-10.68 145.59-28.57c20.13-8.41 36.65-18 47.78-27.74C458.8 331.44 464 323.37 464 317v-29.8a4 4 0 0 0-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 27.98Z"
      />
    </svg>
  ),
);

export const IonServer = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={IonServerSvg} {...props} />
);

const LogosQuaySvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 256 236"
      {...props}
    >
      <path
        fill="#40B4E5"
        d="m200.134 0l55.555 117.514l-55.555 117.518h-47.295l55.555-117.518L152.84 0h47.295ZM110.08 99.836l20.056-38.092l-2.29-8.868L102.847 0H55.552l48.647 102.898l5.881-3.062Zm17.766 74.433l-17.333-39.034l-6.314-3.101l-48.647 102.898h47.295l25-52.88v-7.883Z"
      />
      <path
        fill="#003764"
        d="M152.842 235.032L97.287 117.514L152.842 0h47.295l-55.555 117.514l55.555 117.518h-47.295Zm-97.287 0L0 117.514L55.555 0h47.296L47.295 117.514l55.556 117.518H55.555Z"
      />
    </svg>
  ),
);

export const LogosQuay = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={LogosQuaySvg} {...props} />
);

const LogosAwsSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 256 153"
      {...props}
    >
      <path
        fill="white"
        d="M72.392 55.438c0 3.137.34 5.68.933 7.545a45.373 45.373 0 0 0 2.712 6.103c.424.678.593 1.356.593 1.95c0 .847-.508 1.695-1.61 2.543l-5.34 3.56c-.763.509-1.526.763-2.205.763c-.847 0-1.695-.424-2.543-1.187a26.224 26.224 0 0 1-3.051-3.984c-.848-1.44-1.696-3.052-2.628-5.001c-6.612 7.798-14.92 11.698-24.922 11.698c-7.12 0-12.8-2.035-16.954-6.103c-4.153-4.07-6.272-9.495-6.272-16.276c0-7.205 2.543-13.054 7.714-17.462c5.17-4.408 12.037-6.612 20.768-6.612c2.882 0 5.849.254 8.985.678c3.137.424 6.358 1.102 9.749 1.865V29.33c0-6.443-1.357-10.935-3.985-13.563c-2.712-2.628-7.29-3.9-13.817-3.9c-2.967 0-6.018.34-9.155 1.103c-3.136.762-6.188 1.695-9.155 2.882c-1.356.593-2.373.932-2.967 1.102c-.593.17-1.017.254-1.356.254c-1.187 0-1.78-.848-1.78-2.628v-4.154c0-1.356.17-2.373.593-2.966c.424-.594 1.187-1.187 2.374-1.78c2.967-1.526 6.527-2.798 10.68-3.815C33.908.763 38.316.255 42.978.255c10.088 0 17.463 2.288 22.21 6.866c4.662 4.577 7.036 11.528 7.036 20.853v27.464h.17ZM37.976 68.323c2.798 0 5.68-.508 8.731-1.526c3.052-1.017 5.765-2.882 8.053-5.425c1.357-1.61 2.374-3.39 2.882-5.425c.509-2.034.848-4.493.848-7.375v-3.56a70.791 70.791 0 0 0-7.799-1.441a63.874 63.874 0 0 0-7.968-.509c-5.68 0-9.833 1.102-12.63 3.391c-2.798 2.289-4.154 5.51-4.154 9.748c0 3.984 1.017 6.951 3.136 8.986c2.035 2.119 5.002 3.136 8.901 3.136Zm68.069 9.155c-1.526 0-2.543-.254-3.221-.848c-.678-.508-1.272-1.695-1.78-3.305L81.124 7.799c-.51-1.696-.764-2.798-.764-3.391c0-1.356.678-2.12 2.035-2.12h8.307c1.61 0 2.713.255 3.306.848c.678.509 1.187 1.696 1.695 3.306l14.241 56.117l13.224-56.117c.424-1.695.933-2.797 1.61-3.306c.679-.508 1.866-.847 3.392-.847h6.781c1.61 0 2.713.254 3.39.847c.679.509 1.272 1.696 1.611 3.306l13.394 56.795L168.01 6.442c.508-1.695 1.102-2.797 1.695-3.306c.678-.508 1.78-.847 3.306-.847h7.883c1.357 0 2.12.678 2.12 2.119c0 .424-.085.848-.17 1.356c-.085.509-.254 1.187-.593 2.12l-20.43 65.525c-.508 1.696-1.101 2.798-1.78 3.306c-.678.509-1.78.848-3.22.848h-7.29c-1.611 0-2.713-.254-3.392-.848c-.678-.593-1.271-1.695-1.61-3.39l-13.14-54.676l-13.054 54.59c-.423 1.696-.932 2.798-1.61 3.391c-.678.594-1.865.848-3.39.848h-7.291Zm108.927 2.289c-4.408 0-8.816-.509-13.054-1.526c-4.239-1.017-7.544-2.12-9.748-3.39c-1.357-.764-2.29-1.611-2.628-2.374a5.983 5.983 0 0 1-.509-2.374V65.78c0-1.78.678-2.628 1.95-2.628a4.8 4.8 0 0 1 1.526.255c.508.17 1.271.508 2.119.847a46.108 46.108 0 0 0 9.324 2.967a50.907 50.907 0 0 0 10.088 1.017c5.34 0 9.494-.932 12.376-2.797c2.882-1.865 4.408-4.577 4.408-8.053c0-2.373-.763-4.323-2.289-5.934c-1.526-1.61-4.408-3.051-8.561-4.408l-12.292-3.814c-6.188-1.95-10.765-4.832-13.563-8.647c-2.797-3.73-4.238-7.883-4.238-12.291c0-3.56.763-6.697 2.289-9.41c1.525-2.712 3.56-5.085 6.103-6.95c2.543-1.95 5.425-3.391 8.816-4.408c3.39-1.017 6.95-1.441 10.68-1.441c1.865 0 3.815.085 5.68.339c1.95.254 3.73.593 5.51.932c1.695.424 3.306.848 4.832 1.357c1.526.508 2.712 1.017 3.56 1.525c1.187.679 2.034 1.357 2.543 2.12c.509.678.763 1.61.763 2.797v3.984c0 1.78-.678 2.713-1.95 2.713c-.678 0-1.78-.34-3.22-1.018c-4.833-2.204-10.258-3.306-16.276-3.306c-4.832 0-8.647.763-11.275 2.374c-2.627 1.61-3.984 4.069-3.984 7.544c0 2.374.848 4.408 2.543 6.019c1.696 1.61 4.832 3.221 9.325 4.662l12.037 3.815c6.103 1.95 10.511 4.662 13.139 8.137c2.628 3.476 3.9 7.46 3.9 11.868c0 3.645-.764 6.951-2.205 9.833c-1.525 2.882-3.56 5.425-6.188 7.46c-2.628 2.119-5.764 3.645-9.409 4.747c-3.815 1.187-7.799 1.78-12.122 1.78Z"
      />
      <path
        fill="#F90"
        d="M230.993 120.964c-27.888 20.599-68.408 31.534-103.247 31.534c-48.827 0-92.821-18.056-126.05-48.064c-2.628-2.373-.255-5.594 2.881-3.73c35.942 20.854 80.276 33.484 126.136 33.484c30.94 0 64.932-6.442 96.212-19.666c4.662-2.12 8.646 3.052 4.068 6.442Zm11.614-13.224c-3.56-4.577-23.566-2.204-32.636-1.102c-2.713.34-3.137-2.034-.678-3.814c15.936-11.19 42.13-7.968 45.181-4.239c3.052 3.815-.848 30.008-15.767 42.554c-2.288 1.95-4.492.933-3.475-1.61c3.39-8.393 10.935-27.296 7.375-31.789Z"
      />
    </svg>
  ),
);

export const LogosAws = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={LogosAwsSvg} {...props} />
);

const VscodeIconsFileTypeDocker2Svg: React.FC<React.SVGProps<SVGSVGElement>> =
  React.memo((props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#0096e6"
        d="M16.54 12.663h2.86v2.924h1.446a6.272 6.272 0 0 0 1.988-.333a5.091 5.091 0 0 0 .966-.436a3.584 3.584 0 0 1-.67-1.849a3.907 3.907 0 0 1 .7-2.753l.3-.348l.358.288a4.558 4.558 0 0 1 1.795 2.892a4.375 4.375 0 0 1 3.319.309l.393.226l-.207.4a4.141 4.141 0 0 1-4.157 1.983c-2.48 6.168-7.871 9.088-14.409 9.088c-3.378 0-6.476-1.263-8.241-4.259l-.029-.049l-.252-.519a8.316 8.316 0 0 1-.659-4.208l.04-.433h2.445v-2.923h2.861V9.8h5.721V6.942h3.432v5.721Z"
      />
      <path
        fill="#fff"
        d="M12.006 24.567a6.022 6.022 0 0 1-3.14-3.089a10.329 10.329 0 0 1-2.264.343q-.5.028-1.045.028q-.632 0-1.331-.037a9.051 9.051 0 0 0 7 2.769q.392 0 .78-.014ZM7.08 13.346h.2v2.067h-.2Zm-.376 0h.2v2.067H6.7v-2.067Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.368 0h.2v2.067h-.2v-2.067ZM5 13.14h2.482v2.479H5Zm2.859-2.861h2.48v2.479H7.863Zm2.077.207h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2v-2.066Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.368 0h.2v2.066h-.2Zm-.207 2.653h2.48v2.48H7.863V13.14Zm2.077.207h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2v-2.067Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.368 0h.2v2.067h-.2Zm2.654-.207H13.2v2.48h-2.48V13.14Zm2.076.207H13v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.368 0h.2v2.067h-.2Zm-.206-3.067H13.2v2.479h-2.48v-2.479Zm2.076.207H13v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.368 0h.2v2.066h-.2Zm2.654 2.653h2.479v2.48h-2.48V13.14Zm2.076.207h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.368 0h.192v2.067h-.2v-2.067Zm-.206-3.067h2.479v2.479h-2.48v-2.479Zm2.076.207h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.368 0h.192v2.066h-.2v-2.066Zm-.206-3.067h2.479V9.9h-2.48V7.419Zm2.076.206h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.376 0h.2v2.066h-.2Zm-.368 0h.192v2.066h-.2V7.625Zm2.654 5.514h2.479v2.48h-2.48V13.14Zm2.076.207h.195v2.067h-.2v-2.067Zm-.376 0h.206v2.067h-.206Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.2Zm-.376 0h.2v2.067h-.205v-2.067Zm-.368 0h.2v2.067h-.194v-2.067Zm-6.442 6.292a.684.684 0 1 1-.684.684a.684.684 0 0 1 .684-.684Zm0 .194a.489.489 0 0 1 .177.033a.2.2 0 1 0 .275.269a.49.49 0 1 1-.453-.3Z"
      />
    </svg>
  ));

export const VscodeIconsFileTypeDocker2 = (
  props: Partial<CustomIconComponentProps>,
) => <Icon component={VscodeIconsFileTypeDocker2Svg} {...props} />;

const FluentMdl2RegistryEditorSvg: React.FC<React.SVGProps<SVGSVGElement>> =
  React.memo((props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.8em"
      height="1.8em"
      viewBox="0 0 2048 2048"
      {...props}
    >
      <path
        fill="currentColor"
        d="M1152 896h512v1152H0V384h1152v512zM640 512v384h384V512H640zm384 896v-384H640v384h384zM128 512v384h384V512H128zm0 512v384h384v-384H128zm384 896v-384H128v384h384zm512 0v-384H640v384h384zm512 0v-384h-384v384h384zm-384-512h384v-384h-384v384zm832-960l-384 384l-384-384l384-384l384 384zm-384-239l-239 239l239 239l239-239l-239-239z"
      />
    </svg>
  ));

export const FluentMdl2RegistryEditor = (
  props: Partial<CustomIconComponentProps>,
) => <Icon component={FluentMdl2RegistryEditorSvg} {...props} />;

const DeviconGooglecloudSvg: React.FC<React.SVGProps<SVGSVGElement>> =
  React.memo((props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="#ea4535"
        d="M80.6 40.3h.4l-.2-.2l14-14v-.3c-11.8-10.4-28.1-14-43.2-9.5C36.5 20.8 24.9 32.8 20.7 48c.2-.1.5-.2.8-.2c5.2-3.4 11.4-5.4 17.9-5.4c2.2 0 4.3.2 6.4.6c.1-.1.2-.1.3-.1c9-9.9 24.2-11.1 34.6-2.6h-.1z"
      />
      <path
        fill="#557ebf"
        d="M108.1 47.8c-2.3-8.5-7.1-16.2-13.8-22.1L80 39.9c6 4.9 9.5 12.3 9.3 20v2.5c16.9 0 16.9 25.2 0 25.2H63.9v20h-.1l.1.2h25.4c14.6.1 27.5-9.3 31.8-23.1c4.3-13.8-1-28.8-13-36.9z"
      />
      <path
        fill="#36a852"
        d="M39 107.9h26.3V87.7H39c-1.9 0-3.7-.4-5.4-1.1l-15.2 14.6v.2c6 4.3 13.2 6.6 20.7 6.6z"
      />
      <path
        fill="#f9bc15"
        d="M40.2 41.9c-14.9.1-28.1 9.3-32.9 22.8c-4.8 13.6 0 28.5 11.8 37.3l15.6-14.9c-8.6-3.7-10.6-14.5-4-20.8c6.6-6.4 17.8-4.4 21.7 3.8L68 55.2C61.4 46.9 51.1 42 40.2 42.1z"
      />
    </svg>
  ));

export const DeviconGooglecloud = (
  props: Partial<CustomIconComponentProps>,
) => <Icon component={DeviconGooglecloudSvg} {...props} />;

const OuiMlCreateAdvancedJobSvg: React.FC<React.SVGProps<SVGSVGElement>> =
  React.memo((props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16h-2c0-7.732-6.268-14-14-14S2 8.268 2 16s6.268 14 14 14z"
      />
      <path
        fill="currentColor"
        d="M27 20v12h-2V20zm-5 4v8h-2v-8zm10-2v10h-2V22zM17 9v6h6v2h-6v6h-2v-6H9v-2h6V9z"
        className="ouiIcon__fillSecondary"
      />
    </svg>
  ));

export const OuiMlCreateAdvancedJob = (
  props: Partial<CustomIconComponentProps>,
) => <Icon component={OuiMlCreateAdvancedJobSvg} {...props} />;

const UilDockerSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8.8 8.8h1.8c.1 0 .2-.1.2-.2V7.1c0-.1-.1-.2-.2-.2H8.8c-.1 0-.2.1-.2.2v1.6s.1.1.2.1zm2.4 2.3H13c.1 0 .2-.1.2-.2V9.3c0-.1-.1-.2-.2-.2h-1.8c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2zm0-2.3H13c.1 0 .2-.1.2-.2V7.1l-.2-.2h-1.8c-.1 0-.2.1-.2.2v1.6s.1.1.2.1zm2.5 2.3h1.8c.1 0 .2-.1.2-.2V9.3c0-.1-.1-.2-.2-.2h-1.8c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2zm-2.5-4.6H13c.1 0 .2-.1.2-.2V4.8c0-.1-.1-.2-.2-.2h-1.8c-.1 0-.2.1-.2.2v1.6c0 .1.1.1.2.1zm-7.4 4.6h1.8c.1 0 .2-.1.2-.2V9.3c0-.1-.1-.2-.2-.2H3.8c-.1 0-.2.1-.2.2v1.6l.2.2zm18-1c-.5-.3-1.1-.5-1.6-.4c-.3 0-.6 0-.8.1c-.2-.9-.7-1.7-1.4-2.1l-.3-.2l-.2.3c-.3.2-.5.6-.6 1.1c-.2.8-.1 1.6.3 2.2c-.5.2-1 .3-1.5.4H2.6c-.3 0-.6.3-.6.6c0 1.2.2 2.3.6 3.4c.4 1.1 1.1 2 2 2.6c1.4.7 2.9 1 4.4.9c.8 0 1.6-.1 2.4-.2c1.1-.2 2.2-.6 3.2-1.2c.8-.5 1.5-1.1 2.2-1.8c.9-1.1 1.6-2.3 2.1-3.7h.2c.8 0 1.6-.3 2.2-.8c.3-.2.5-.5.6-.9l.1-.2l-.2-.1zm-15.5 1H8c.1 0 .2-.1.2-.2V9.3c0-.1-.1-.2-.2-.2H6.3c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2zm0-2.3H8c.1 0 .2-.1.2-.2V7.1c0-.1-.1-.2-.2-.2H6.3c-.1 0-.2.1-.2.2v1.6s.1.1.2.1zm2.5 2.3h1.8c.1 0 .2-.1.2-.2V9.3c0-.1-.1-.2-.2-.2H8.8c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2z"
      />
    </svg>
  ),
);

export const UilDocker = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={UilDockerSvg} {...props} />
);

const TablerPlugConnectedSvg: React.FC<React.SVGProps<SVGSVGElement>> =
  React.memo((props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1-5-5L7 12zm10 0l-5-5l1.5-1.5a3.536 3.536 0 1 1 5 5L17 12zM3 21l2.5-2.5m13-13L21 3m-11 8l-2 2m5 1l-2 2"
      />
    </svg>
  ));

export const TablerPlugConnected = (
  props: Partial<CustomIconComponentProps>,
) => <Icon component={TablerPlugConnectedSvg} {...props} />;

const StreamlineLockRotationSolidSvg: React.FC<React.SVGProps<SVGSVGElement>> =
  React.memo((props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      {...props}
    >
      <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
        <path d="M1.5 7a5.5 5.5 0 0 1 9.82-3.405l-.966.965a.5.5 0 0 0 .353.854H13.5a.5.5 0 0 0 .5-.5V2.12a.5.5 0 0 0-.854-.354l-.76.761a7 7 0 1 0 1.427 6.086a.75.75 0 0 0-1.46-.344A5.5 5.5 0 0 1 1.5 7" />
        <path d="M6.125 5.813a.875.875 0 1 1 1.75 0v.5h-1.75zm-1.25.719v-.72a2.125 2.125 0 1 1 4.25 0v.72a.998.998 0 0 1 .375.78v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-2c0-.315.146-.597.375-.78" />
      </g>
    </svg>
  ));

export const StreamlineLockRotationSolid = (
  props: Partial<CustomIconComponentProps>,
) => <Icon component={StreamlineLockRotationSolidSvg} {...props} />;

const EosIconsAdminSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        id="eosIconsAdmin0"
        fill="currentColor"
        d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5Zm0 3.9a3 3 0 1 1-3 3a3 3 0 0 1 3-3Zm0 7.9c2 0 6 1.09 6 3.08a7.2 7.2 0 0 1-12 0c0-1.99 4-3.08 6-3.08Z"
      />
    </svg>
  ),
);

export const EosIconsAdmin = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={EosIconsAdminSvg} {...props} />
);

const GrommetIconsHostSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M17 4h1v1h-1V4ZM3 1h18v22H3V1Zm0 12h18H3Zm0 5h18H3ZM3 8h18H3Z"
      />
    </svg>
  ),
);

export const GrommetIconsHost = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={GrommetIconsHostSvg} {...props} />
);

const ElNetworkSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 1200 1200"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M1.422 630.365C-.4 620.378.049 611.896.049 601.507v-2.748c163.322-14.011 341.241-55.15 473.665-149.787c37.996 17.409 75.363 15.034 111.208-2.748c75.104 75.855 148.807 128.574 247.13 159.405c10.067 25.652 26.086 45.35 48.054 59.091c-26.543 65.961-63.612 124.136-111.209 174.521c-70.346-50.674-163.23-13.979-194.957 59.091c-220.012-2.384-441.761-98.642-572.518-267.967m571.143 354.54c-112.313 58.005-230.856 89.276-351.474 82.451C127.796 989.072 60.567 886.74 26.135 780.151c151.522 130.23 352.912 204.549 546.43 204.754m248.503-16.49c127.807-26.659 245.244-78.05 340.488-156.657c-125.012 325.938-501.479 474.94-810.035 336.676c100.162-14.432 194.251-49.025 274.588-94.817c80.286 46.004 175.832-2.388 194.959-85.202m236.146-335.302c49.196-3.631 97.167-7.251 142.786-15.116c-.089 12.283-1.357 24.374-1.373 35.729c-85.771 109.767-214.696 184.762-343.235 219.87c47.966-58.233 83.545-122.923 108.462-188.264c39.174-5.082 71.173-23.077 93.36-52.219m21.968-87.948c-5.416-40.734-25.791-73.796-57.664-94.819c10.072-93.269 11.733-184.275 4.119-272.089c96.156 99.264 154.383 225.964 170.244 351.792c-34.781 7.329-73.682 12.368-116.699 15.116M410.559 387.133C289.275 463.55 147.263 500.671 6.914 512.185C41.964 293.143 191.16 112.112 391.337 38.09c5.438 71.134 21.91 139.81 48.054 199.257c-41.973 42.622-51.941 97.264-28.832 149.786m236.145-101.69c63.215-78.489 115.77-158.695 145.532-252.851C843.492 50 889.715 72.444 930.903 99.928c14.386 113.183 16.386 225.917 5.491 331.18c-49.729 8.487-88.823 38.744-105.717 82.45c-73.416-26.576-133.514-76.068-186.72-129.174c13.364-34.477 13.869-66.794 2.747-98.941m-127.683-81.077c-25.545-63.148-42.218-124.34-42.562-191.012c76.599-17.623 159.296-17.036 232.027-2.748c-27.786 77.786-71.688 149.88-118.073 208.876c-16.321-6.971-56.075-22.499-71.392-15.116"
      />
    </svg>
  ),
);

export const ElNetwork = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ElNetworkSvg} {...props} />
);

const FluentMdl2HealthSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 2048 2048"
      {...props}
    >
      <path
        fill="currentColor"
        d="M347 1024h-39l716 716l588-588h181l-769 769l-865-864q-35-35-62-75t-47-86h243l283-282l448 447l320-319l155 154h355q32-51 49-108t17-117q0-87-32-162t-89-130t-132-87t-163-32q-84 0-149 26t-120 70t-105 97t-106 111q-54-54-105-109t-106-99t-121-72t-148-28q-86 0-161 32t-132 89t-89 132t-33 162q0 47 11 97H9q-5-24-6-48t-2-48q0-113 42-212t116-173t173-116t212-43q83 0 148 19t120 52t106 81t106 103q55-56 105-103t106-80t121-53t148-19q112 0 211 42t172 116t116 172t43 211q0 97-34 188t-97 167h-470l-101-102l-320 321l-448-449l-229 230z"
      />
    </svg>
  ),
);

export const FluentMdl2Health = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={FluentMdl2HealthSvg} {...props} />
);

export const PajamasLogSvg: React.FC<React.SVGProps<SVGSVGElement>> =
  React.memo((props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.5 2.5v11h9v-11h-9ZM3 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3Zm5 10a.75.75 0 0 1 .75-.75h1.75a.75.75 0 0 1 0 1.5H8.75A.75.75 0 0 1 8 11Zm-2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm2-4a.75.75 0 0 1 .75-.75h1.75a.75.75 0 0 1 0 1.5H8.75A.75.75 0 0 1 8 8ZM6 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm2-4a.75.75 0 0 1 .75-.75h1.75a.75.75 0 0 1 0 1.5H8.75A.75.75 0 0 1 8 5ZM6 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
    </svg>
  ));

export const PajamasLog = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={PajamasLogSvg} {...props} />
);

const MaterialSymbolsDashboardSvg: React.FC<React.SVGProps<SVGSVGElement>> =
  React.memo((props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Z"
      />
    </svg>
  ));

export const MaterialSymbolsDashboard = (
  props: Partial<CustomIconComponentProps>,
) => <Icon component={MaterialSymbolsDashboardSvg} {...props} />;

const MynauiDangerTriangleSvg: React.FC<React.SVGProps<SVGSVGElement>> =
  React.memo((props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 8.5V14m0 3.247v-.5m-6.02-5.985C8.608 5.587 9.92 3 12 3c2.08 0 3.393 2.587 6.02 7.762l.327.644c2.182 4.3 3.274 6.45 2.287 8.022C19.648 21 17.208 21 12.327 21h-.654c-4.88 0-7.321 0-8.307-1.572c-.987-1.572.105-3.722 2.287-8.022z"
      />
    </svg>
  ));

export const MynauiDangerTriangle = (
  props: Partial<CustomIconComponentProps>,
) => <Icon component={MynauiDangerTriangleSvg} {...props} />;

const MynauiApiSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.5 13L7 11.5l5.5 5.5l-1.5 1.5c-.75.75-3.5 2-5.5 0s-.75-4.75 0-5.5ZM3 21l2.5-2.5m13-7.5L17 12.5L11.5 7L13 5.5c.75-.75 3.5-2 5.5 0s.75 4.75 0 5.5Zm-6-3l-2 2M21 3l-2.5 2.5m-2.5 6l-2 2"
      />
    </svg>
  ),
);

export const MynauiApi = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={MynauiApiSvg} {...props} />
);

const CarbonBatchJobSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M32 26v-2h-2.101a4.968 4.968 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A4.964 4.964 0 0 0 26 20.101V18h-2v2.101a4.968 4.968 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A4.964 4.964 0 0 0 20.101 24H18v2h2.101c.13.637.384 1.229.732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a4.964 4.964 0 0 0 1.753.732V32h2v-2.101a4.968 4.968 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A4.964 4.964 0 0 0 29.899 26zm-7 2c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3m-5-11h-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2m-8-2h8V4h-8z"
      />
      <path fill="currentColor" d="M17 21H8a2 2 0 0 1-2-2V7h2v12h9z" />
      <path fill="currentColor" d="M13 25H4c-1.103 0-2-.897-2-2V11h2v12h9z" />
    </svg>
  ),
);

export const CarbonBatchJob = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={CarbonBatchJobSvg} {...props} />
);

const WhhCpuSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 960 960"
      {...props}
    >
      <path
        fill="currentColor"
        d="M928 640h-96v-64h96q13 0 22.5 9.5T960 608t-9.5 22.5T928 640zm0-128h-96v-64h96q13 0 22.5 9.5T960 480t-9.5 22.5T928 512zm0-128h-96v-64h96q13 0 22.5 9.5T960 352t-9.5 22.5T928 384zm0-128h-96v-64h96q13 0 22.5 9.5T960 224t-9.5 22.5T928 256zM736 960q-13 0-22.5-9.5T704 928v-96h64v96q0 13-9.5 22.5T736 960zm-32-192H256q-26 0-45-19t-19-45V256q0-26 19-45t45-19h448q27 0 45.5 18.5T768 256v448q0 27-18.5 45.5T704 768zm0-736q0-13 9.5-22.5T736 0t22.5 9.5T768 32v96h-64V32zm-128 0q0-13 9.5-22.5T608 0t22.5 9.5T640 32v96h-64V32zm-128 0q0-13 9.5-22.5T480 0t22.5 9.5T512 32v96h-64V32zm-128 0q0-13 9.5-22.5T352 0t22.5 9.5T384 32v96h-64V32zm-128 0q0-13 9.5-22.5T224 0t22.5 9.5T256 32v96h-64V32zM0 736q0-13 9.5-22.5T32 704h96v64H32q-13 0-22.5-9.5T0 736zm0-128q0-13 9.5-22.5T32 576h96v64H32q-13 0-22.5-9.5T0 608zm0-128q0-13 9.5-22.5T32 448h96v64H32q-13 0-22.5-9.5T0 480zm0-128q0-13 9.5-22.5T32 320h96v64H32q-13 0-22.5-9.5T0 352zm0-128q0-13 9.5-22.5T32 192h96v64H32q-13 0-22.5-9.5T0 224zm256 704q0 13-9.5 22.5T224 960t-22.5-9.5T192 928v-96h64v96zm128 0q0 13-9.5 22.5T352 960t-22.5-9.5T320 928v-96h64v96zm128 0q0 13-9.5 22.5T480 960t-22.5-9.5T448 928v-96h64v96zm128 0q0 13-9.5 22.5T608 960t-22.5-9.5T576 928v-96h64v96zm320-192q0 13-9.5 22.5T928 768h-96v-64h96q13 0 22.5 9.5T960 736z"
      />
    </svg>
  ),
);

export const WhhCpu = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={WhhCpuSvg} {...props} />
);

const WhhRamSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 960 1024"
      {...props}
    >
      <path
        fill="currentColor"
        d="M832 768H128q-53 0-90.5-37.5T0 640V384q0-53 37.5-90.5T128 256h704q53 0 90.5 37.5T960 384v256q0 53-37.5 90.5T832 768zM256 416q0-13-9.5-22.5T224 384H96q-13 0-22.5 9.5T64 416v192q0 13 9.5 22.5T96 640t22.5-9.5T128 608v-32h64v32q0 13 9.5 22.5T224 640t22.5-9.5T256 608v-32h-32q-13 0-22.5-9.5T192 544t9.5-22.5T224 512h32v-96zm256 0q0-13-9.5-22.5T480 384H352q-13 0-22.5 9.5T320 416v192q0 13 9.5 22.5T352 640t22.5-9.5T384 608v-32h64v32q0 13 9.5 22.5T480 640t22.5-9.5T512 608V416zm384 0q0-13-9.5-22.5T864 384H608q-13 0-22.5 9.5T576 416v192q0 13 9.5 22.5T608 640t22.5-9.5T640 608V448h64v160q0 13 9.5 22.5T736 640t22.5-9.5T768 608V448h64v160q0 13 9.5 22.5T864 640t22.5-9.5T896 608V416zm-512 32h64v64h-64v-64zm-256 0h64v64h-64v-64zM768 32q0-13 9.5-22.5T800 0t22.5 9.5T832 32v160h-64V32zm-128 0q0-13 9.5-22.5T672 0t22.5 9.5T704 32v160h-64V32zm-128 0q0-13 9.5-22.5T544 0t22.5 9.5T576 32v160h-64V32zm-128 0q0-13 9.5-22.5T416 0t22.5 9.5T448 32v160h-64V32zm-128 0q0-13 9.5-22.5T288 0t22.5 9.5T320 32v160h-64V32zm-128 0q0-13 9.5-22.5T160 0t22.5 9.5T192 32v160h-64V32zm64 960q0 13-9.5 22.5T160 1024t-22.5-9.5T128 992V832h64v160zm128 0q0 13-9.5 22.5T288 1024t-22.5-9.5T256 992V832h64v160zm128 0q0 13-9.5 22.5T416 1024t-22.5-9.5T384 992V832h64v160zm128 0q0 13-9.5 22.5T544 1024t-22.5-9.5T512 992V832h64v160zm128 0q0 13-9.5 22.5T672 1024t-22.5-9.5T640 992V832h64v160zm128 0q0 13-9.5 22.5T800 1024t-22.5-9.5T768 992V832h64v160z"
      />
    </svg>
  ),
);

export const WhhRam = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={WhhRamSvg} {...props} />
);

const GrommetIconsInstallSvg: React.FC<React.SVGProps<SVGSVGElement>> =
  React.memo((props) => (
    <svg
      width="0.8em"
      height="0.8em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M19 13.5v4L12 22l-7-4.5v-4m7 8.5v-8.5m6.5-5l-6.5-4L15.5 2L22 6zm-13 0l6.5-4L8.5 2L2 6zm13 .5L12 13l3.5 2.5l6.5-4zm-13 0l6.5 4l-3.5 2.5l-6.5-4z"
      />
    </svg>
  ));

export const GrommetIconsInstall = (
  props: Partial<CustomIconComponentProps>,
) => <Icon component={GrommetIconsInstallSvg} {...props} />;

export const GameIconsAcorn: React.FC<React.SVGProps<SVGSVGElement>> =
  React.memo((props) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M422.625 18.28c-24.68.13-51.932 15.455-74.094 36.907c1.868 1.036 3.742 2.07 5.626 3.157a396.997 396.997 0 0 1 22.72 14.125c25.19-9.583 55.47-14.465 103.437-2.97c-12.036-37.07-33.633-51.345-57.688-51.22zM237.78 40.22l28.97 94.25c12.57 6.443 24.827 13.41 36.813 20.843l-36.625-111.97c-8.476-1.68-16.657-2.662-24.563-3c-1.54-.065-3.074-.108-4.594-.124zm-19.218 1.124a136.71 136.71 0 0 0-4.78.687a133.758 133.758 0 0 0-25.595 6.876l15.688 58.625a492.05 492.05 0 0 1 39.906 15.907l-25.218-82.093zm69.875 7.593l40.157 122.876c15.922 11.124 31.32 23.128 46.25 35.906L325.906 64.374c-13.092-6.527-25.568-11.643-37.47-15.438zm-117.5 7.844c-14.657 7.857-28.523 18.348-41.875 31.095a496.901 496.901 0 0 1 53.657 12.813zm179.25 20.907l53.282 155.97c10.798 10.382 21.322 21.187 31.624 32.374c.395-1.174.75-2.332 1.125-3.5L379.843 97.407c-8.84-6.63-18.706-13.185-29.656-19.72zM136.595 108.25c-17.05 11.436-32.43 27.876-45.344 50.22c-42.303 73.19-61.83 198.325-24.53 265.717l-.064-.062c.752 23.392-7.597 45.63-17.812 67.594c27.268-12.192 54.897-17.815 82.687-20.783l-.468-.343c87.895 19.01 212.87-49.42 260.688-132.156c13.547-23.44 20.606-46.14 22.28-67.72c-77.218-81.572-166.868-139.912-277.436-162.468zm271.469 14L444.188 228c2.638-20.573.96-39.855-5.688-58.25c-5.856-16.202-15.717-32.01-30.438-47.5z"
      />
    </svg>
  ));

const DeviconAzureSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.8em"
      height="1.8em"
      viewBox="0 0 128 128"
      {...props}
    >
      <defs>
        <linearGradient
          id="deviconAzure0"
          x1="60.919"
          x2="18.667"
          y1="9.602"
          y2="134.423"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#114A8B" />
          <stop offset="1" stopColor="#0669BC" />
        </linearGradient>
        <linearGradient
          id="deviconAzure1"
          x1="74.117"
          x2="64.344"
          y1="67.772"
          y2="71.076"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity=".3" />
          <stop offset=".071" stopOpacity=".2" />
          <stop offset=".321" stopOpacity=".1" />
          <stop offset=".623" stopOpacity=".05" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="deviconAzure2"
          x1="68.742"
          x2="115.122"
          y1="5.961"
          y2="129.525"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3CCBF4" />
          <stop offset="1" stopColor="#2892DF" />
        </linearGradient>
      </defs>
      <path
        fill="url(#deviconAzure0)"
        d="M46.09.002h40.685L44.541 125.137a6.485 6.485 0 0 1-6.146 4.413H6.733a6.482 6.482 0 0 1-5.262-2.699a6.474 6.474 0 0 1-.876-5.848L39.944 4.414A6.488 6.488 0 0 1 46.09 0z"
        transform="translate(.587 4.468) scale(.91904)"
      />
      <path
        fill="#0078d4"
        d="M97.28 81.607H37.987a2.743 2.743 0 0 0-1.874 4.751l38.1 35.562a5.991 5.991 0 0 0 4.087 1.61h33.574z"
      />
      <path
        fill="url(#deviconAzure1)"
        d="M46.09.002A6.434 6.434 0 0 0 39.93 4.5L.644 120.897a6.469 6.469 0 0 0 6.106 8.653h32.48a6.942 6.942 0 0 0 5.328-4.531l7.834-23.089l27.985 26.101a6.618 6.618 0 0 0 4.165 1.519h36.396l-15.963-45.616l-46.533.011L86.922.002z"
        transform="translate(.587 4.468) scale(.91904)"
      />
      <path
        fill="url(#deviconAzure2)"
        d="M98.055 4.408A6.476 6.476 0 0 0 91.917.002H46.575a6.478 6.478 0 0 1 6.137 4.406l39.35 116.594a6.476 6.476 0 0 1-6.137 8.55h45.344a6.48 6.48 0 0 0 6.136-8.55z"
        transform="translate(.587 4.468) scale(.91904)"
      />
    </svg>
  ),
);

export const DeviconAzure = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={DeviconAzureSvg} {...props} />
);

const ZmdiGithubSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.8em"
      height="1.8em"
      viewBox="0 0 432 416"
      {...props}
    >
      <path
        fill="currentColor"
        d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"
      />
    </svg>
  ),
);

export const ZmdiGithub = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ZmdiGithubSvg} {...props} />
);

const SimpleIconsForgejoSvg: React.FC<React.SVGProps<SVGSVGElement>> =
  React.memo((props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.8em"
      height="1.9em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="white"
        d="M16.777 0a2.9 2.9 0 1 1-2.529 4.322H12.91a4.266 4.266 0 0 0-4.265 4.195v2.118a7.076 7.076 0 0 1 4.147-1.42l.118-.002h1.338a2.9 2.9 0 0 1 5.43 1.422a2.9 2.9 0 0 1-5.43 1.422H12.91a4.266 4.266 0 0 0-4.265 4.195v2.319A2.9 2.9 0 0 1 7.222 24A2.9 2.9 0 0 1 5.8 18.57V8.589a7.109 7.109 0 0 1 6.991-7.108l.118-.001h1.338A2.9 2.9 0 0 1 16.778 0ZM7.223 19.905a1.194 1.194 0 1 0 0 2.389a1.194 1.194 0 0 0 0-2.389Zm9.554-10.464a1.194 1.194 0 1 0 0 2.389a1.194 1.194 0 0 0 0-2.39Zm0-7.735a1.194 1.194 0 1 0 0 2.389a1.194 1.194 0 0 0 0-2.389Z"
      />
    </svg>
  ));

export const SimpleIconsForgejo = (
  props: Partial<CustomIconComponentProps>,
) => <Icon component={SimpleIconsForgejoSvg} {...props} />;

const SimpleIconsGiteaSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.8em"
      height="1.8em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="white"
        d="M4.209 4.603c-.247 0-.525.02-.84.088c-.333.07-1.28.283-2.054 1.027C-.403 7.25.035 9.685.089 10.052c.065.446.263 1.687 1.21 2.768c1.749 2.141 5.513 2.092 5.513 2.092s.462 1.103 1.168 2.119c.955 1.263 1.936 2.248 2.89 2.367c2.406 0 7.212-.004 7.212-.004s.458.004 1.08-.394c.535-.324 1.013-.893 1.013-.893s.492-.527 1.18-1.73c.21-.37.385-.729.538-1.068c0 0 2.107-4.471 2.107-8.823c-.042-1.318-.367-1.55-.443-1.627c-.156-.156-.366-.153-.366-.153s-4.475.252-6.792.306c-.508.011-1.012.023-1.512.027v4.474l-.634-.301c0-1.39-.004-4.17-.004-4.17c-1.107.016-3.405-.084-3.405-.084s-5.399-.27-5.987-.324c-.187-.011-.401-.032-.648-.032zm.354 1.832h.111s.271 2.269.6 3.597C5.549 11.147 6.22 13 6.22 13s-.996-.119-1.641-.348c-.99-.324-1.409-.714-1.409-.714s-.73-.511-1.096-1.52C1.444 8.73 2.021 7.7 2.021 7.7s.32-.859 1.47-1.145c.395-.106.863-.12 1.072-.12zm8.33 2.554c.26.003.509.127.509.127l.868.422l-.529 1.075a.686.686 0 0 0-.614.359a.685.685 0 0 0 .072.756l-.939 1.924a.69.69 0 0 0-.66.527a.687.687 0 0 0 .347.763a.686.686 0 0 0 .867-.206a.688.688 0 0 0-.069-.882l.916-1.874a.667.667 0 0 0 .237-.02a.657.657 0 0 0 .271-.137a8.826 8.826 0 0 1 1.016.512a.761.761 0 0 1 .286.282c.073.21-.073.569-.073.569c-.087.29-.702 1.55-.702 1.55a.692.692 0 0 0-.676.477a.681.681 0 1 0 1.157-.252c.073-.141.141-.282.214-.431c.19-.397.515-1.16.515-1.16c.035-.066.218-.394.103-.814c-.095-.435-.48-.638-.48-.638c-.467-.301-1.116-.58-1.116-.58s0-.156-.042-.27a.688.688 0 0 0-.148-.241l.516-1.062l2.89 1.401s.48.218.583.619c.073.282-.019.534-.069.657c-.24.587-2.1 4.317-2.1 4.317s-.232.554-.748.588a1.065 1.065 0 0 1-.393-.045l-.202-.08l-4.31-2.1s-.417-.218-.49-.596c-.083-.31.104-.691.104-.691l2.073-4.272s.183-.37.466-.497a.855.855 0 0 1 .35-.077z"
      />
    </svg>
  ),
);

export const SimpleIconsGitea = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={SimpleIconsGiteaSvg} {...props} />
);

const VaadinCubesSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.8em"
      height="1.8em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="white"
        d="M12 6V2L8 0L4 2v4L0 8v5l4 2l4-2l4 2l4-2V8zM8.09 1.12L11 2.56l-2.6 1.3l-2.91-1.44zM5 2.78l3 1.5v3.6l-3-1.5v-3.6zm-1 11.1l-3-1.5v-3.6l3 1.5v3.6zm.28-4L1.4 8.42L4 7.12l2.88 1.44zm7.72 4l-3-1.5v-3.6l3 1.5v3.6zm.28-4L9.4 8.42l2.6-1.3l2.88 1.44z"
      />
    </svg>
  ),
);

export const VaadinCubes = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={VaadinCubesSvg} {...props} />
);

const SimpleIconsGitSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="white"
        d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039a1.837 1.837 0 0 1-2.6 0a1.846 1.846 0 0 1-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348a1.848 1.848 0 0 1 0 2.6a1.844 1.844 0 0 1-2.609 0a1.834 1.834 0 0 1 0-2.598c.182-.18.387-.316.605-.406V8.835a1.834 1.834 0 0 1-.996-2.41L7.636 3.7L.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477a1.545 1.545 0 0 0 2.186 0l10.43-10.43a1.544 1.544 0 0 0 0-2.187"
      />
    </svg>
  ),
);

export const SimpleIconsGit = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={SimpleIconsGitSvg} {...props} />
);

const StreamlineLocalStorageFolderSolidSvg: React.FC<
  React.SVGProps<SVGSVGElement>
> = React.memo((props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="0.8em"
    height="0.8em"
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.796 5h4.77c.24 0 .434-.195.434-.435v-3.26a.435.435 0 0 0-.434-.435h-2.61l-.12-.54A.435.435 0 0 0 10.4 0H8.796a.435.435 0 0 0-.435.435v4.13A.435.435 0 0 0 8.796 5M2 3h4.25a1 1 0 0 0 0-2H1.457C.652 1 0 1.652 0 2.457v7.086C0 10.348.652 11 1.457 11h4.028l-.537 1.5H4A.75.75 0 0 0 4 14h6a.75.75 0 1 0 0-1.5h-.948L8.515 11h4.028C13.348 11 14 10.348 14 9.543V7.25a1 1 0 1 0-2 0V9H2z"
      clipRule="evenodd"
    />
  </svg>
));

export const StreamlineLocalStorageFolderSolid = (
  props: Partial<CustomIconComponentProps>,
) => <Icon component={StreamlineLocalStorageFolderSolidSvg} {...props} />;

const GrommetIconsSystemSvg: React.FC<React.SVGProps<SVGSVGElement>> =
  React.memo((props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M1 19h22V1H1v18Zm4 4h14H5Zm3 0h8v-4H8v4ZM7.757 5.757l2.122 2.122l-2.122-2.122ZM9 10H6h3Zm.879 2.121l-2.122 2.122l2.122-2.122ZM12 13v3v-3Zm2.121-.879l2.122 2.122l-2.122-2.122ZM18 10h-3h3Zm-1.757-4.243l-2.122 2.122l2.122-2.122ZM12 7V4v3Zm0 0a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"
      />
    </svg>
  ));

export const GrommetIconsSystem = (
  props: Partial<CustomIconComponentProps>,
) => <Icon component={GrommetIconsSystemSvg} {...props} />;

const TablerSquareNumber1FilledSvg: React.FC<React.SVGProps<SVGSVGElement>> =
  React.memo((props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zm-5.339 5.886c-.083-.777-1.008-1.16-1.617-.67l-.084.077l-2 2l-.083.094a1 1 0 0 0 0 1.226l.083.094l.094.083a1 1 0 0 0 1.226 0l.094-.083l.293-.293V16l.007.117a1 1 0 0 0 1.986 0L13 16V8z"
      />
    </svg>
  ));

export const TablerSquareNumber1Filled = (
  props: Partial<CustomIconComponentProps>,
) => <Icon component={TablerSquareNumber1FilledSvg} {...props} />;

const TablerSquareNumber2FilledSvg: React.FC<React.SVGProps<SVGSVGElement>> =
  React.memo((props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM13 7h-3l-.117.007a1 1 0 0 0 0 1.986L10 9h3v2h-2l-.15.005a2 2 0 0 0-1.844 1.838L9 13v2l.005.15a2 2 0 0 0 1.838 1.844L11 17h3l.117-.007a1 1 0 0 0 0-1.986L14 15h-3v-2h2l.15-.005a2 2 0 0 0 1.844-1.838L15 11V9l-.005-.15a2 2 0 0 0-1.838-1.844z"
      />
    </svg>
  ));

export const TablerSquareNumber2Filled = (
  props: Partial<CustomIconComponentProps>,
) => <Icon component={TablerSquareNumber2FilledSvg} {...props} />;

const CarbonIbmEventAutomationSvg: React.FC<React.SVGProps<SVGSVGElement>> =
  React.memo((props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <circle cx="4" cy="22" r="2" fill="currentColor" />
      <path
        fill="currentColor"
        d="M13.5 30a9.527 9.527 0 0 1-7.73-3.977l1.626-1.164A7.523 7.523 0 0 0 13.5 28c3.969 0 7.258-3.1 7.487-7.058l1.997.116C22.694 26.072 18.527 30 13.5 30Z"
      />
      <circle cx="28" cy="23" r="2" fill="currentColor" />
      <path
        fill="currentColor"
        d="m30.641 19.095l-1.924-.545A7.521 7.521 0 0 0 29 16.5c0-4.136-3.364-7.5-7.5-7.5a7.438 7.438 0 0 0-3.088.663l-.824-1.822A9.424 9.424 0 0 1 21.5 7c5.238 0 9.5 4.262 9.5 9.5c0 .88-.12 1.754-.359 2.595zm-10.227-4.51l-3-3C17.037 11.209 16.534 11 16 11s-1.037.208-1.414.586l-3 3c-.39.39-.586.902-.586 1.414s.196 1.024.586 1.414l3 3c.377.378.88.586 1.414.586s1.037-.208 1.414-.586l3-3c.39-.39.586-.902.586-1.414s-.196-1.024-.586-1.414zM16 19l-3-3l3-3l3 3l-3 3z"
      />
      <circle cx="16" cy="3" r="2" fill="currentColor" />
      <path
        fill="currentColor"
        d="M8.025 19.882A9.49 9.49 0 0 1 3 11.5c0-5.027 3.928-9.193 8.942-9.484l.116 1.997a7.502 7.502 0 0 0-3.089 14.105l-.944 1.764Z"
      />
    </svg>
  ));

export const CarbonIbmEventAutomation = (
  props: Partial<CustomIconComponentProps>,
) => <Icon component={CarbonIbmEventAutomationSvg} {...props} />;

const FluentMdl2FileTemplateSvg: React.FC<React.SVGProps<SVGSVGElement>> =
  React.memo((props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 2048 2048"
      {...props}
    >
      <path
        fill="currentColor"
        d="m1243 0l549 549v219h-128V640h-512V128H256v1792h768v128H128V0h1115zm37 512h293l-293-293v293zm640 1408h128v128h-128v-128zm-256 0h128v128h-128v-128zm-256 0h128v128h-128v-128zm256-1024h128v128h-128V896zm-256 0h128v128h-128V896zm-256 1024h128v128h-128v-128zm768-256h128v128h-128v-128zm-768 0h128v128h-128v-128zm768-256h128v128h-128v-128zm-768 0h128v128h-128v-128zm768-256h128v128h-128v-128zm-768 0h128v128h-128v-128zm896-256v128h-128V896h128zm-896 0h128v128h-128V896z"
      />
    </svg>
  ));

export const FluentMdl2FileTemplate = (
  props: Partial<CustomIconComponentProps>,
) => <Icon component={FluentMdl2FileTemplateSvg} {...props} />;

const TdesignNotificationSvg: React.FC<React.SVGProps<SVGSVGElement>> =
  React.memo((props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 8a8 8 0 1 1 16 0v4.697l2 3V20h-5.611a4.502 4.502 0 0 1-8.777 0H2v-4.303l2-3V8Zm5.708 12a2.5 2.5 0 0 0 4.584 0H9.708ZM12 2a6 6 0 0 0-6 6v5.303l-2 3V18h16v-1.697l-2-3V8a6 6 0 0 0-6-6Z"
      />
    </svg>
  ));

export const TdesignNotification = (
  props: Partial<CustomIconComponentProps>,
) => <Icon component={TdesignNotificationSvg} {...props} />;

const PajamasErrorSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 14.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13ZM8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm1-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-.25-6.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5Z"
        clipRule="evenodd"
      />
    </svg>
  ),
);

export const PajamasError = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={PajamasErrorSvg} {...props} />
);

const TemplatetoolkitSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="m83.62 46.544l353.47-2.646c110.008 10.36 92.868 178.97-12.368 180.224l-77.172 1.847v163.045c.093 101.333-174.376 107.79-177.199 4.86v-168.88H93.652c-117.969 6.632-128-171.818-10.031-178.45zm210.758 342.47V170.943h129.764c40.668 0 49.123-68.785 10.216-73.904l-349.4 2.667c-46.389 3.805-40.584 73.153 5.921 71.237h128.174v222.633c6.987 30.68 77.326 28.48 75.325-4.562z"
      />
    </svg>
  ),
);

export const Templatetoolkit = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={TemplatetoolkitSvg} {...props} />
);

const PromptTemplateSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M31.5 23c-.827 0-1.5-.673-1.5-1.5V20c0-1.102-.897-2-2-2h-2v2h2v1.5c0 .98.407 1.864 1.058 2.5A3.485 3.485 0 0 0 28 26.5V28h-2v2h2c1.103 0 2-.897 2-2v-1.5c0-.827.673-1.5 1.5-1.5h.5v-2zM16 20v1.5c0 .827-.673 1.5-1.5 1.5H14v2h.5c.827 0 1.5.673 1.5 1.5V28c0 1.103.897 2 2 2h2v-2h-2v-1.5c0-.98-.407-1.864-1.058-2.5A3.485 3.485 0 0 0 18 21.5V20h2v-2h-2c-1.103 0-2 .898-2 2m12-5h2V5c0-1.103-.897-2-2-2h-3v2h3z"
      />
      <circle cx="23" cy="13" r="2" fill="currentColor" />
      <circle cx="16" cy="13" r="2" fill="currentColor" />
      <circle cx="9" cy="13" r="2" fill="currentColor" />
      <path
        fill="currentColor"
        d="M7 23H4c-1.103 0-2-.897-2-2V5c0-1.103.897-2 2-2h3v2H4v16h3z"
      />
    </svg>
  ),
);

export const PromptTemplate = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={PromptTemplateSvg} {...props} />
);

const ContainerVolumeSolidSvg: React.FC<React.SVGProps<SVGSVGElement>> =
  React.memo((props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill="currentColor"
        d="M32 18H18a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V20a2 2 0 0 0-2-2ZM18 32V20h14v12Z"
        className="clr-i-solid clr-i-solid-path-1"
      />
      <path
        fill="currentColor"
        d="M21 21.7a.7.7 0 0 0-.7.7v7.49a.7.7 0 0 0 1.4 0V22.4a.7.7 0 0 0-.7-.7Z"
        className="clr-i-solid clr-i-solid-path-2"
      />
      <path
        fill="currentColor"
        d="M25 21.82a.7.7 0 0 0-.7.7V30a.7.7 0 1 0 1.4 0v-7.48a.7.7 0 0 0-.7-.7Z"
        className="clr-i-solid clr-i-solid-path-3"
      />
      <path
        fill="currentColor"
        d="M29 21.7a.7.7 0 0 0-.7.7v7.49a.7.7 0 1 0 1.4 0V22.4a.7.7 0 0 0-.7-.7Z"
        className="clr-i-solid clr-i-solid-path-4"
      />
      <path
        fill="currentColor"
        d="M18 16h10V8.12c0-1.68-5.38-3-12-3s-12 1.32-12 3V28c0 1.5 4.33 2.75 10 3v-5.78a29.17 29.17 0 0 1-8-1.29v-1.49l.24.1A26.63 26.63 0 0 0 14 23.82V20a4 4 0 0 1 .29-1.47A29.19 29.19 0 0 1 6 17.23v-1.48l.24.09a29 29 0 0 0 9 1.32A4 4 0 0 1 18 16ZM6 10.54V9.05l.24.09A30.12 30.12 0 0 0 16 10.47a28.33 28.33 0 0 0 10-1.42v1.5a32.53 32.53 0 0 1-10 1.32a32.44 32.44 0 0 1-10-1.33Z"
        className="clr-i-solid clr-i-solid-path-5"
      />
      <path fill="none" d="M0 0h36v36H0z" />
    </svg>
  ));

export const ContainerVolumeSolid = (
  props: Partial<CustomIconComponentProps>,
) => <Icon component={ContainerVolumeSolidSvg} {...props} />;

export const ContainerImageSvg: React.FC<React.SVGProps<SVGSVGElement>> =
  React.memo((props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.38 1.103a.75.75 0 0 0-.76 0L.37 5.353a.75.75 0 0 0 0 1.294l7.25 4.25a.75.75 0 0 0 .76 0l7.25-4.25a.75.75 0 0 0 0-1.294l-7.25-4.25ZM8 9.381L2.233 6L8 2.62L13.767 6L8 9.38Zm-6.87-.028a.75.75 0 0 0-.76 1.294l7.25 4.25a.75.75 0 0 0 .76 0l7.25-4.25a.75.75 0 0 0-.76-1.294L8 13.381L1.13 9.353Z"
        clipRule="evenodd"
      />
    </svg>
  ));

export const ContainerImage = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ContainerImageSvg} {...props} />
);

const PortInputSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18 28c-3.593 0-6.967-1.59-9.257-4.363l1.542-1.274A9.975 9.975 0 0 0 18 26c5.514 0 10-4.486 10-10S23.514 6 18 6a9.975 9.975 0 0 0-7.715 3.637L8.743 8.363A11.969 11.969 0 0 1 18 4c6.617 0 12 5.383 12 12s-5.383 12-12 12Z"
      />
      <path
        fill="currentColor"
        d="m23 16l-7-7l-1.414 1.414L19.172 15H2v2h17.172l-4.586 4.586L16 23l7-7z"
      />
    </svg>
  ),
);

export const PortInput = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={PortInputSvg} {...props} />
);

export const VolumeBindingSvg: React.FC<React.SVGProps<SVGSVGElement>> =
  React.memo((props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6 19a6 6 0 0 1 6-6h4V3a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.001A2 2 0 0 0 4 21h2.349A5.976 5.976 0 0 1 6 19Zm8-17a1 1 0 1 1-1 1a1 1 0 0 1 1-1ZM9 3a5 5 0 1 1-2 9.578V10H4.422A4.991 4.991 0 0 1 9 3ZM4 2a1 1 0 1 1-1 1a1 1 0 0 1 1-1Zm0 18a1 1 0 1 1 1-1a1 1 0 0 1-1 1Z"
      />
      <circle cx="9" cy="8" r="2" fill="currentColor" />
      <path fill="currentColor" d="M13 18h4v2h-4z" />
      <path
        fill="currentColor"
        d="M18 15h-2v2h2a2 2 0 0 1 0 4h-2v2h2a4 4 0 0 0 0-8Zm-4 6h-2a2 2 0 0 1 0-4h2v-2h-2a4 4 0 0 0 0 8h2Z"
      />
    </svg>
  ));

export const VolumeBinding = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={VolumeBindingSvg} {...props} />
);

const EnvSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M20 18a1 1 0 0 1-1 1h-4a3 3 0 0 0-3 3a3 3 0 0 0-3-3H5a1 1 0 0 1-1-1H2a3 3 0 0 0 3 3h4a2 2 0 0 1 2 2h2a2 2 0 0 1 2-2h4a3 3 0 0 0 3-3Zm0-12a1 1 0 0 0-1-1h-4a3 3 0 0 1-3-3a3 3 0 0 1-3 3H5a1 1 0 0 0-1 1H2a3 3 0 0 1 3-3h4a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h4a3 3 0 0 1 3 3Zm-8 6L9 8H7v8h2v-4l3 4h2V8h-2v4zm9-4l-2 5.27L17 8h-2l3 8h2l3-8h-2zM1 8v8h5v-2H3v-1h2v-2H3v-1h3V8H1z"
    />
  </svg>
));

export const Env = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={EnvSvg} {...props} />
);

const LabelSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <g fill="none">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m10 19l5.5-5.5M13 22l2.5-2.5M4.414 16.586l11-11A2 2 0 0 1 16.828 5H25a2 2 0 0 1 2 2v8.172a2 2 0 0 1-.586 1.414l-11 11a2 2 0 0 1-2.828 0l-8.172-8.172a2 2 0 0 1 0-2.828Z"
        />
        <path fill="currentColor" d="M23 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
      </g>
    </svg>
  ),
);

export const Label = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={LabelSvg} {...props} />
);

const DeploySvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M23 1s-6.528-.458-9 2c-.023.037-4 4-4 4L5 8l-3 2l8 4l4 8l2-3l1-5s3.963-3.977 4-4c2.458-2.472 2-9 2-9Zm-6 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2ZM7 17c-1-1-3-1-4 0s-1 5-1 5s4 0 5-1s1-3 0-4Z"
      />
    </svg>
  ),
);

export const Deploy = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={DeploySvg} {...props} />
);

const TargetSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13.48 7.516a6.5 6.5 0 1 1-6.93-7" />
        <path d="M9.79 8.09A3 3 0 1 1 5.9 4.21M7 7l2.5-2.5m2 .5l-2-.5l-.5-2l2-2l.5 2l2 .5z" />
      </g>
    </svg>
  ),
);

export const Target = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={TargetSvg} {...props} />
);

const NutSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    {...props}
  >
    <mask id="ipTNut0">
      <g
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <path d="M37.699 6c-.527.534-2.46 2.672-3.69 3.741c-.175.535 2.109 2.672 2.636 3.207c.527.534 6.85-3.207 6.324-3.741c-.422-.428-3.69-2.316-5.27-3.207Z" />
        <path
          fill="#555"
          d="M11.372 16.722a5.74 5.74 0 0 1-.03-.264a19.59 19.59 0 0 0-4.3 6.142a3.515 3.515 0 1 1-1.506 6.866c-.02 3.546 1.15 6.955 3.58 9.601c3.505 3.815 8.81 5.151 14.03 4.064c3.214-.668 6.395-2.254 9.106-4.745a19.996 19.996 0 0 0 3.39-4.051c-2.225.67-4.675-.412-5.601-2.598a3.683 3.683 0 0 0-2.577-2.155l-1.682-.381a5.972 5.972 0 0 1-4.24-3.65l-.091-.231a5.583 5.583 0 0 0-4.857-3.539a5.583 5.583 0 0 1-5.19-4.826l-.032-.233Z"
        />
        <path d="m13.154 11.658l-.251.27a5.87 5.87 0 0 0-1.53 4.794l.03.233a5.583 5.583 0 0 0 5.191 4.826a5.583 5.583 0 0 1 4.857 3.54l.09.23a5.973 5.973 0 0 0 4.241 3.65l1.683.381a3.684 3.684 0 0 1 2.576 2.155c.996 2.35 3.755 3.425 6.1 2.416c2.368-1.019 4.084-3.199 4.483-5.746l.207-1.33a9.933 9.933 0 0 0 .1-2.166l-.108-1.69a17.275 17.275 0 0 0-3.504-9.38l-.252-.331a15.79 15.79 0 0 0-14.1-6.138l-1.406.138a13.293 13.293 0 0 0-8.407 4.148Z" />
      </g>
    </mask>
    <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTNut0)" />
  </svg>
));

export const Nut = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={NutSvg} {...props} />
);

const BridgeSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 3h24v18.001h-6v-7.603a8.417 8.417 0 0 0-1.346-1.053A8.644 8.644 0 0 0 12 11c-2.02 0-3.586.671-4.654 1.345A8.42 8.42 0 0 0 6 13.398V21H0V3Zm6 7.836A10.644 10.644 0 0 1 12 9a10.644 10.644 0 0 1 6 1.836V5.001h-.625L12 5H6v5.836Zm14-5.835v14h2v-14h-2ZM4 5H2v14h2V5Z"
      />
    </svg>
  ),
);

export const Bridge = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={BridgeSvg} {...props} />
);

const ContainerSolidSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill="currentColor"
        d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2ZM9.63 24.23a.79.79 0 0 1-.81.77a.79.79 0 0 1-.82-.77V11.77a.79.79 0 0 1 .82-.77a.79.79 0 0 1 .81.77Zm6 0a.79.79 0 0 1-.82.77a.79.79 0 0 1-.81-.77V11.77a.79.79 0 0 1 .81-.77a.79.79 0 0 1 .82.77Zm6.21 0a.79.79 0 0 1-.82.77a.79.79 0 0 1-.81-.77V11.77a.79.79 0 0 1 .81-.77a.79.79 0 0 1 .82.77Zm6.12 0a.79.79 0 0 1-.82.77a.79.79 0 0 1-.81-.77V11.77a.79.79 0 0 1 .81-.77a.79.79 0 0 1 .82.77Z"
        className="clr-i-solid clr-i-solid-path-1"
      />
      <path fill="none" d="M0 0h36v36H0z" />
    </svg>
  ),
);

export const ContainerSolid = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ContainerSolidSvg} {...props} />
);

const MoreSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.5 7.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Zm15 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Zm-7.274 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Z"
    />
  </svg>
));

export const More = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={MoreSvg} {...props} />
);

const Live24FilledSvg: React.FC<React.SVGProps<SVGSVGElement>> = React.memo(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6.343 4.938a1 1 0 0 1 0 1.415a8.003 8.003 0 0 0 0 11.317a1 1 0 1 1-1.414 1.414c-3.907-3.906-3.907-10.24 0-14.146a1 1 0 0 1 1.414 0Zm12.732 0c3.906 3.907 3.906 10.24 0 14.146a1 1 0 0 1-1.415-1.414a8.003 8.003 0 0 0 0-11.317a1 1 0 0 1 1.415-1.415ZM9.31 7.812a1 1 0 0 1 0 1.414a3.92 3.92 0 0 0 0 5.544a1 1 0 1 1-1.415 1.414a5.92 5.92 0 0 1 0-8.372a1 1 0 0 1 1.415 0Zm6.958 0a5.92 5.92 0 0 1 0 8.372a1 1 0 0 1-1.414-1.414a3.92 3.92 0 0 0 0-5.544a1 1 0 0 1 1.414-1.414Zm-4.186 2.77a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"
      />
    </svg>
  ),
);

export const Live24Filled = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={Live24FilledSvg} {...props} />
);
