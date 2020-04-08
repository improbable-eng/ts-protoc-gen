import {SourceCodeInfo, FileDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";

const VALUE_KEY = "value";
/**
 * index the path list to location index mapping to a tree structure
 * store location index value on node 'value' key
 * e.g. [4][1][2][0][1]: { value: 15 }
 */
interface IndexNode {
  [k: number]: IndexNode;
  [VALUE_KEY]?: number;
}

export class BaseComments {
  constructor(protected locationList: SourceCodeInfo.Location[], protected indexNode: IndexNode) {}

  printLeadingComments(printLn: (text: string) => void) {
    const location = this.getLocation();
    if (!location || !location.hasLeadingComments()) {
      return;
    }

    printLn(`/**`);
    location.getLeadingComments().trim().split("\n").forEach(line => {
      printLn(` * ${line}`);
    });
    printLn(` */`);
  }

  getLocation(): SourceCodeInfo.Location | undefined {
    if (!this.indexNode) {
      return undefined;
    }
    return this.locationList[this.indexNode[VALUE_KEY] || -1];
  }
}

export class EnumComments extends BaseComments {
  constructor(locationList: SourceCodeInfo.Location[], indexNode: IndexNode) {
    super(locationList, indexNode);
  }

  getValue(index: number): BaseComments {
    return new BaseComments(
      this.locationList,
      this.indexNode[2] && this.indexNode[2][index]
    );
  }
}


export class MessageComments extends BaseComments {
  constructor(locationList: SourceCodeInfo.Location[], indexNode: IndexNode) {
    super(locationList, indexNode);
  }

  getField(index: number): BaseComments {
    return new BaseComments(
      this.locationList,
      this.indexNode[2] && this.indexNode[2][index]
    );
  }

  getNestType(index: number): MessageComments {
    return new MessageComments(
      this.locationList,
      this.indexNode[3] && this.indexNode[3][index]
    );
  }

  getEnumType(index: number): EnumComments {
    return new EnumComments(
      this.locationList,
      this.indexNode[4] && this.indexNode[4][index]
    );
  }

  getOneofDecl(index: number): BaseComments {
    return new BaseComments(
      this.locationList,
      this.indexNode[8] && this.indexNode[8][index]
    );
  }
}

export class ServiceComments extends BaseComments {
  constructor(locationList: SourceCodeInfo.Location[], indexNode: IndexNode) {
    super(locationList, indexNode);
  }

  getMethod(index: number): BaseComments {
    return new BaseComments(
      this.locationList,
      this.indexNode[2] && this.indexNode[2][index]
    );
  }
}


export class CommentsMap {
  private locationList: SourceCodeInfo.Location[];
  private indexedLocations: IndexNode = {};

  constructor(fileDescriptor: FileDescriptorProto) {
    this.locationList = fileDescriptor.getSourceCodeInfo().getLocationList();
    // index locations
    this.locationList.forEach((location, index) => {
      const pathList = location.getPathList();
      let node = this.indexedLocations;
      for (let i = 0; i < pathList.length; i++) {
        const subIndex = pathList[i];
        if (!node[subIndex]) {
          node[subIndex] = {};
        }
        node = node[subIndex];
      }
      node[VALUE_KEY] = index;
    });
  }

  getMessageType(index: number): MessageComments {
    return new MessageComments(
      this.locationList,
      this.indexedLocations[4] && this.indexedLocations[4][index]
    );
  }

  getEnumType(index: number): EnumComments {
    return new EnumComments(
      this.locationList,
      this.indexedLocations[5] && this.indexedLocations[5][index]
    );
  }

  getService(index: number): ServiceComments {
    return new ServiceComments(
      this.locationList,
      this.indexedLocations[6] && this.indexedLocations[6][index]
    );
  }
}
