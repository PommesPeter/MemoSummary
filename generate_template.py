import argparse
import time


def get_time():
    date = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
    return date


def get_tags(args):
    tags_list = args.tags.split(',')
    return tags_list


def get_categories(args):
    categories_list = args.categories.split(',')
    return categories_list


def get_argparse():
    parser = argparse.ArgumentParser()
    parser.add_argument('--path', type=str, default='./',
                        help="the file path you save the file.")
    parser.add_argument('--mode', type=str, default='articles',
                        help="choose the mode to generate the file.")
    parser.add_argument('--title', type=str, default='',
                        help="the title you write about this file")
    parser.add_argument('--link', type=str, default='',
                        help="created the router of the blog")
    parser.add_argument('--categories', type=str, default='',
                        help="which categries of this passage")
    parser.add_argument('--tags', type=str, default='',
                        help="the tags of this passage.")
    parser.add_argument('--name', type=str, default="",
                        help="declared the type of file")
    parser.add_argument('--data', type=str, default="",
                        help="the data of file about index page")
    parser.add_argument('--key', type=str, default="key",
                        help="added the index page's key word")
    parser.add_argument('--imgUrl', type=str, default="./",
                        help="the index page of head img")
    parser.add_argument(
        '--desc', type=str, default="There're noting here", help="about the page desc")
    parser.add_argument('--sidebar', type=bool, default=True,
                        help="whether use side bar")
    parser.add_argument('--article', type=bool, default=True,
                        help="whether this file is index page")
    parser.add_argument('--comment', type=bool, default=True,
                        help="Would you use comment?")
    parser.add_argument('--editLink', type=bool,
                        default=True, help="editable link?")
    print(parser.parse_args())
    return parser.parse_args()


def create_template(args, mode):
    res = ''
    path_str = ''
    res += '---\n'
    if mode == "article":
        res += ('title: ' + args.title + '\n')
        res += ('date: ' + get_time() + '\n')
        res += ('permalink: ' + args.link + '\n')
        res += ('categories:\n')
        for item in get_categories(args):
            res += ('  - ' + item + '\n')
        res += ('tags:\n')
        for item in get_tags(args):
            res += ('  - ' + item + '\n')
    elif mode == "index":
        res += 'pageComponent:\n'
        res += '  name:' + args.name + '\n'
        res += '  data:\n'
        res += '    key:' + args.key + '\n'
        res += '    imgUrl:' + args.imgUrl + '\n'
        res += '    description:' + args.desc + '\n'
        res += ('title: ' + args.title + '\n')
        res += ('date: ' + get_time() + '\n')
        res += ('permalink: ' + args.link + '\n')
        res += ('sidebar:' + str(args.sidebar) + '\n')
        res += ('article:' + str(args.article) + '\n')
        res += ('comment:' + str(args.comment) + '\n')
        res += ('editLink:' + str(args.editLink) + '\n')
    elif mode == "other":
        pass
    res += '---\n'
    if not args.path.endswith('.md'):
        path_str = args.path + '.md'
    else:
        path_str = args.path
    with open(path_str, 'w') as f:
        f.write(res)
    print("Generated...")


if __name__ == '__main__':

    args = get_argparse()
    print(get_time())
    create_template(args, args.mode)
