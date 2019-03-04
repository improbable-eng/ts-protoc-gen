from builder import docker_util
from builder import deployment
from builder import util


if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('-t', '--tag', type=str, help='The tag to assign to the built docket image')
    parser.add_argument('-n', '--name', type=str, help='The name to assign to the built docker image')
    parser.add_argument('-b', '--build', type=str, help='The directory containing the necessary files for the image (including Dockerfile)')
    parser.add_argument('-v', '--vars-file', type=str, help='TODO')
    parser.add_argument('--deploy-npm', action='store_true', help='Use to deploy the built cJenkinsfileontainer\'s js package to npm')
    args = parser.parse_args()

    env = util.source_vars(filename=args.vars_file) if args.vars_file else {}

    name = env.get('IMAGE_NAME', args.name)
    if not name:
        raise Exception('name must be provided')
    tag = env.get('VERSION', args.tag)
    if not tag:
        raise Exception('tag must be provided')

    imageName = '{name}:{tag}'.format(name=name, tag=tag)
    if args.build:
        image = docker_util.build_image(imageName=imageName, directory=args.build)

    if args.deploy_npm:
        deployment.deploy_to_npm(imageName=name, imageTag=tag)
